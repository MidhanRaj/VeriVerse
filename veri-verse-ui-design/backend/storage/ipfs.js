let Web3Storage, File;
let storageAvailable = false;

try {
    const pkg = require('web3.storage');
    Web3Storage = pkg.Web3Storage;
    File = pkg.File;
    storageAvailable = true;
} catch (e) {
    console.warn('⚠️  web3.storage not found or failed to load. Using mock implementation.');
    console.warn('   Error:', e.message);
    storageAvailable = false;
}

// Get token from environment variable
const TOKEN = process.env.WEB3_STORAGE_TOKEN;

// Mock client if no token provided (for development/demo)
const getClient = () => {
    if (!storageAvailable || !TOKEN || TOKEN === 'your_web3_storage_token_here') {
        if (!storageAvailable) {
            console.warn('⚠️  Web3.Storage dependency not available. Using mock IPFS.');
        } else if (!TOKEN || TOKEN === 'your_web3_storage_token_here') {
            console.warn('⚠️  No WEB3_STORAGE_TOKEN found in .env file. Using mock IPFS.');
            console.warn('   Get a free token at: https://web3.storage');
        }

        return {
            put: async (files) => {
                console.log('🔄 Mock IPFS Put:', Array.isArray(files) ? files.length : 1, 'file(s)');
                return 'bafybeimockcid' + Math.random().toString(36).substring(7);
            },
            get: async (cid) => {
                console.log('🔄 Mock IPFS Get:', cid);
                return { ok: true, files: () => [] };
            }
        };
    }

    try {
        console.log('✅ Web3.Storage client initialized');
        return new Web3Storage({ token: TOKEN });
    } catch (error) {
        console.error('❌ Failed to initialize Web3.Storage client:', error.message);
        console.warn('   Falling back to mock IPFS implementation');
        // Return mock client if initialization fails
        return {
            put: async (files) => {
                console.log('🔄 Mock IPFS Put (fallback):', Array.isArray(files) ? files.length : 1, 'file(s)');
                return 'bafybeimockcid' + Math.random().toString(36).substring(7);
            },
            get: async (cid) => {
                console.log('🔄 Mock IPFS Get (fallback):', cid);
                return { ok: true, files: () => [] };
            }
        };
    }
};

const saveToIPFS = async (data) => {
    try {
        const client = getClient();

        // Check if we're using mock client
        const isMock = !storageAvailable || !TOKEN || TOKEN === 'your_web3_storage_token_here';

        if (isMock) {
            // Mock implementation - just return a fake CID
            const cid = await client.put([data]);
            console.log(`📦 Saved to Mock IPFS: ${cid}`);
            return cid;
        }

        // Real Web3.Storage implementation
        const buffer = Buffer.from(JSON.stringify(data));
        const files = [new File([buffer], 'data.json')];
        const cid = await client.put(files);
        console.log(`📦 Saved to IPFS: ${cid}`);
        return cid;
    } catch (error) {
        console.error('❌ Error saving to IPFS:', error.message);
        // Fallback to mock CID on error
        const mockCid = 'bafybeierror' + Math.random().toString(36).substring(7);
        console.log(`📦 Using fallback mock CID: ${mockCid}`);
        return mockCid;
    }
};

const fetchFromIPFS = async (cid) => {
    try {
        const client = getClient();
        const res = await client.get(cid);

        if (!res.ok) {
            throw new Error(`Failed to get ${cid}`);
        }

        if (res.files) {
            const files = await res.files();
            return { cid, message: "Data fetched from IPFS", files };
        }
        return { cid, message: "Mock Data" };
    } catch (error) {
        console.error('❌ Error fetching from IPFS:', error.message);
        return { cid, message: "Mock Data (error fallback)", error: error.message };
    }
};

module.exports = {
    saveToIPFS,
    fetchFromIPFS,
    isConfigured: () => storageAvailable && TOKEN && TOKEN !== 'your_web3_storage_token_here'
};

