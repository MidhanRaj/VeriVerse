const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const BLOCKDAG_CONFIG = {
    name: 'BlockDAG Awakening Testnet',
    chainId: 1043,
    rpcUrl: process.env.BLOCKDAG_RPC_URL || 'https://rpc.awakening.bdagscan.com',
    explorerUrl: 'https://awakening.bdagscan.com/'
};

// Read the Solidity contract
const contractPath = path.join(__dirname, 'VeriVerseProof.sol');
const contractSource = fs.readFileSync(contractPath, 'utf8');

// Simple ABI and bytecode (you would normally compile this with solc or hardhat)
// For now, we'll provide instructions to compile manually
const CONTRACT_ABI = [
    "function storeProof(string memory _proofId, string memory _agentId, string memory _ipfsHash) public",
    "function getProof(string memory _proofId) public view returns (tuple(string proofId, string agentId, string ipfsHash, uint256 timestamp, address submitter))",
    "function getAllProofIds() public view returns (string[] memory)",
    "event ProofStored(string indexed proofId, string agentId, string ipfsHash, uint256 timestamp)"
];

async function deployContract() {
    console.log('🚀 VeriVerse Smart Contract Deployment');
    console.log('=====================================\n');

    // Check for private key
    const privateKey = process.env.PRIVATE_KEY;
    if (!privateKey || privateKey === 'your_private_key_here') {
        console.error('❌ Error: No private key found!');
        console.error('   Please set PRIVATE_KEY in your .env file');
        console.error('   You can generate a new wallet or export from MetaMask');
        process.exit(1);
    }

    try {
        // Connect to BlockDAG network
        console.log(`📡 Connecting to ${BLOCKDAG_CONFIG.name}...`);
        const provider = new ethers.JsonRpcProvider(BLOCKDAG_CONFIG.rpcUrl);
        const wallet = new ethers.Wallet(privateKey, provider);

        console.log(`✅ Connected!`);
        console.log(`   Deployer Address: ${wallet.address}`);

        // Check balance
        const balance = await provider.getBalance(wallet.address);
        console.log(`   Balance: ${ethers.formatEther(balance)} BDAG\n`);

        if (balance === 0n) {
            console.warn('⚠️  Warning: Your wallet has 0 BDAG');
            console.warn('   You need testnet BDAG to deploy the contract');
            console.warn('   Visit BlockDAG faucet or contact the team for testnet tokens\n');
        }

        console.log('📝 Contract Compilation Required');
        console.log('=================================');
        console.log('To deploy this contract, you need to compile it first.');
        console.log('\nOption 1: Use Remix IDE (Recommended for beginners)');
        console.log('1. Visit https://remix.ethereum.org');
        console.log('2. Create a new file: VeriVerseProof.sol');
        console.log('3. Copy the contract code from backend/blockchain/VeriVerseProof.sol');
        console.log('4. Compile the contract (Solidity 0.8.0)');
        console.log('5. Deploy using "Injected Provider - MetaMask"');
        console.log('6. Make sure MetaMask is connected to BlockDAG Awakening Testnet');
        console.log('   - Network Name: BlockDAG Awakening Testnet');
        console.log('   - RPC URL: https://rpc.awakening.bdagscan.com');
        console.log('   - Chain ID: 1043');
        console.log('   - Currency: BDAG');
        console.log('7. After deployment, copy the contract address');
        console.log('8. Add it to your .env file: CONTRACT_ADDRESS=0x...');
        console.log('\nOption 2: Use Hardhat (Advanced)');
        console.log('1. Install Hardhat: npm install --save-dev hardhat');
        console.log('2. Initialize: npx hardhat init');
        console.log('3. Configure hardhat.config.js for BlockDAG network');
        console.log('4. Deploy: npx hardhat run scripts/deploy.js --network blockdag');
        console.log('\nOption 3: Manual Deployment (This script - Coming soon)');
        console.log('This script will support automatic deployment in a future update.');
        console.log('For now, please use Remix IDE or Hardhat.\n');

        // Save deployment info
        const deploymentInfo = {
            network: BLOCKDAG_CONFIG.name,
            chainId: BLOCKDAG_CONFIG.chainId,
            rpcUrl: BLOCKDAG_CONFIG.rpcUrl,
            explorerUrl: BLOCKDAG_CONFIG.explorerUrl,
            deployerAddress: wallet.address,
            contractABI: CONTRACT_ABI,
            instructions: 'Use Remix IDE or Hardhat to deploy. See console output above.'
        };

        const infoPath = path.join(__dirname, 'deployment-info.json');
        fs.writeFileSync(infoPath, JSON.stringify(deploymentInfo, null, 2));
        console.log(`📄 Deployment info saved to: ${infoPath}\n`);

        console.log('✅ Setup Complete!');
        console.log('Once you deploy the contract, update your .env file with:');
        console.log('CONTRACT_ADDRESS=<your_deployed_contract_address>');

    } catch (error) {
        console.error('\n❌ Deployment Error:', error.message);
        if (error.code === 'NETWORK_ERROR') {
            console.error('   Could not connect to BlockDAG network');
            console.error('   Please check your internet connection and RPC URL');
        }
        process.exit(1);
    }
}

// Run deployment
if (require.main === module) {
    deployContract().catch(console.error);
}

module.exports = { deployContract, CONTRACT_ABI };
