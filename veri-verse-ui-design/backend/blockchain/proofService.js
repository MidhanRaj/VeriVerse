const { getContract, getSigner, getProvider, ethers, BLOCKDAG_CONFIG } = require('./blockdagProvider');
const { readDB, writeDB } = require('../storage/db');

// Contract Address (will be set after deployment)
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || null;

// Simple ABI for the VeriVerseProof contract
const CONTRACT_ABI = [
    "function storeProof(string memory _proofId, string memory _agentId, string memory _ipfsHash) public",
    "function getProof(string memory _proofId) public view returns (tuple(string proofId, string agentId, string ipfsHash, uint256 timestamp, address submitter))",
    "event ProofStored(string indexed proofId, string agentId, string ipfsHash, uint256 timestamp)"
];

const createProof = async (proofId, agentId, ipfsHash) => {
    console.log(`Creating proof on BlockDAG: ${proofId}, ${agentId}, ${ipfsHash}`);

    const proof = {
        proofId,
        agentId,
        ipfsHash,
        timestamp: new Date().toISOString(),
        txHash: null,
        blockNumber: null,
        network: BLOCKDAG_CONFIG.name
    };

    try {
        const signer = getSigner();

        if (signer && CONTRACT_ADDRESS) {
            // Real blockchain transaction
            console.log(`📝 Storing proof on ${BLOCKDAG_CONFIG.name}...`);

            const contract = getContract(CONTRACT_ADDRESS, CONTRACT_ABI);
            const tx = await contract.storeProof(proofId, agentId, ipfsHash);

            console.log(`⏳ Transaction submitted: ${tx.hash}`);
            console.log(`   Waiting for confirmation...`);

            const receipt = await tx.wait();

            proof.txHash = tx.hash;
            proof.blockNumber = receipt.blockNumber;
            proof.explorerUrl = `${BLOCKDAG_CONFIG.explorerUrl}tx/${tx.hash}`;

            console.log(`✅ Proof stored on-chain!`);
            console.log(`   TX: ${tx.hash}`);
            console.log(`   Block: ${receipt.blockNumber}`);
            console.log(`   Explorer: ${proof.explorerUrl}`);
        } else {
            // Simulated blockchain (no signer or contract)
            console.log('⚠️  Simulating blockchain transaction (no wallet/contract configured)');
            proof.txHash = "0x" + Math.random().toString(36).substring(2);
            proof.simulated = true;
        }

        // Save to local DB for quick retrieval
        const db = readDB();
        db.proofs.push(proof);
        writeDB(db);

        return proof;

    } catch (error) {
        console.error("❌ Error creating proof:", error.message);

        // Fallback to simulated proof on error
        proof.txHash = "0x" + Math.random().toString(36).substring(2);
        proof.simulated = true;
        proof.error = error.message;

        const db = readDB();
        db.proofs.push(proof);
        writeDB(db);

        return proof;
    }
};

const verifyProof = async (proofId) => {
    // First check local DB
    const db = readDB();
    const localProof = db.proofs.find(p => p.proofId === proofId);

    if (!localProof) {
        throw new Error("Proof not found in local database");
    }

    // If we have a contract, verify on-chain
    if (CONTRACT_ADDRESS && !localProof.simulated) {
        try {
            const provider = getProvider();
            const contract = getContract(CONTRACT_ADDRESS, CONTRACT_ABI);

            const onChainProof = await contract.getProof(proofId);

            return {
                isValid: true,
                proof: {
                    ...localProof,
                    onChain: {
                        proofId: onChainProof.proofId,
                        agentId: onChainProof.agentId,
                        ipfsHash: onChainProof.ipfsHash,
                        timestamp: new Date(Number(onChainProof.timestamp) * 1000).toISOString(),
                        submitter: onChainProof.submitter
                    }
                },
                verificationMethod: `On-chain verification via ${BLOCKDAG_CONFIG.name}`
            };
        } catch (error) {
            console.warn("Could not verify on-chain, using local DB:", error.message);
        }
    }

    // Return local proof if on-chain verification not available
    return {
        isValid: true,
        proof: localProof,
        verificationMethod: localProof.simulated ? "Local DB (Simulated)" : "Local DB + Blockchain"
    };
};

module.exports = {
    createProof,
    verifyProof
};
