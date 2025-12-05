const { ethers } = require('ethers');
const dotenv = require('dotenv');
dotenv.config();

// BlockDAG Awakening Network Configuration
const BLOCKDAG_CONFIG = {
    name: 'BlockDAG Awakening Testnet',
    chainId: 1043,
    rpcUrl: process.env.BLOCKDAG_RPC_URL || 'https://rpc.awakening.bdagscan.com',
    explorerUrl: 'https://awakening.bdagscan.com/',
    currency: 'BDAG'
};

let provider = null;
let signer = null;

/**
 * Initialize BlockDAG Web3 provider
 */
const initializeProvider = () => {
    try {
        // Create JSON-RPC provider for BlockDAG
        provider = new ethers.JsonRpcProvider(BLOCKDAG_CONFIG.rpcUrl);
        console.log(`✅ Connected to ${BLOCKDAG_CONFIG.name}`);
        console.log(`   RPC: ${BLOCKDAG_CONFIG.rpcUrl}`);
        console.log(`   Chain ID: ${BLOCKDAG_CONFIG.chainId}`);

        // Initialize signer if private key is available
        const privateKey = process.env.PRIVATE_KEY;
        if (privateKey && privateKey !== 'your_private_key_here') {
            signer = new ethers.Wallet(privateKey, provider);
            console.log(`✅ Wallet initialized: ${signer.address}`);
        } else {
            console.warn('⚠️  No private key found. Blockchain write operations will be simulated.');
            console.warn('   Set PRIVATE_KEY in your .env file to enable real transactions.');
        }

        return provider;
    } catch (error) {
        console.error('❌ Failed to initialize BlockDAG provider:', error.message);
        return null;
    }
};

/**
 * Get the provider instance
 */
const getProvider = () => {
    if (!provider) {
        return initializeProvider();
    }
    return provider;
};

/**
 * Get the signer instance
 */
const getSigner = () => {
    if (!signer) {
        console.warn('⚠️  No signer available. Cannot sign transactions.');
        return null;
    }
    return signer;
};

/**
 * Get network information
 */
const getNetworkInfo = async () => {
    const p = getProvider();
    if (!p) {
        return {
            name: BLOCKDAG_CONFIG.name,
            chainId: BLOCKDAG_CONFIG.chainId,
            connected: false
        };
    }

    try {
        const network = await p.getNetwork();
        const blockNumber = await p.getBlockNumber();

        return {
            name: BLOCKDAG_CONFIG.name,
            chainId: Number(network.chainId),
            blockNumber,
            connected: true,
            rpcUrl: BLOCKDAG_CONFIG.rpcUrl,
            explorerUrl: BLOCKDAG_CONFIG.explorerUrl
        };
    } catch (error) {
        console.error('Error getting network info:', error.message);
        return {
            name: BLOCKDAG_CONFIG.name,
            chainId: BLOCKDAG_CONFIG.chainId,
            connected: false,
            error: error.message
        };
    }
};

/**
 * Get wallet balance
 */
const getBalance = async (address) => {
    const p = getProvider();
    if (!p) return '0';

    try {
        const balance = await p.getBalance(address);
        return ethers.formatEther(balance);
    } catch (error) {
        console.error('Error getting balance:', error.message);
        return '0';
    }
};

/**
 * Get contract instance
 */
const getContract = (contractAddress, abi) => {
    const s = getSigner();
    const p = getProvider();

    if (!contractAddress || !abi) {
        throw new Error('Contract address and ABI are required');
    }

    if (s) {
        return new ethers.Contract(contractAddress, abi, s);
    } else if (p) {
        return new ethers.Contract(contractAddress, abi, p);
    } else {
        throw new Error('No provider or signer available');
    }
};

/**
 * Send a transaction
 */
const sendTransaction = async (to, value, data = '0x') => {
    const s = getSigner();
    if (!s) {
        throw new Error('No signer available. Cannot send transaction.');
    }

    try {
        const tx = await s.sendTransaction({
            to,
            value: ethers.parseEther(value.toString()),
            data
        });

        console.log(`📤 Transaction sent: ${tx.hash}`);
        console.log(`   View on explorer: ${BLOCKDAG_CONFIG.explorerUrl}tx/${tx.hash}`);

        const receipt = await tx.wait();
        console.log(`✅ Transaction confirmed in block ${receipt.blockNumber}`);

        return {
            hash: tx.hash,
            blockNumber: receipt.blockNumber,
            status: receipt.status === 1 ? 'success' : 'failed',
            explorerUrl: `${BLOCKDAG_CONFIG.explorerUrl}tx/${tx.hash}`
        };
    } catch (error) {
        console.error('❌ Transaction failed:', error.message);
        throw error;
    }
};

/**
 * Estimate gas for a transaction
 */
const estimateGas = async (transaction) => {
    const p = getProvider();
    if (!p) return '0';

    try {
        const gasEstimate = await p.estimateGas(transaction);
        return gasEstimate.toString();
    } catch (error) {
        console.error('Error estimating gas:', error.message);
        return '0';
    }
};

// Initialize provider on module load
initializeProvider();

module.exports = {
    getProvider,
    getSigner,
    getNetworkInfo,
    getBalance,
    getContract,
    sendTransaction,
    estimateGas,
    BLOCKDAG_CONFIG,
    ethers // Export ethers for use in other modules
};
