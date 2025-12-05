const dotenv = require('dotenv');
dotenv.config();

let ThirdwebSDK;
try {
    const pkg = require("@thirdweb-dev/sdk");
    ThirdwebSDK = pkg.ThirdwebSDK;
} catch (e) {
    console.warn('@thirdweb-dev/sdk not found. Blockchain features will be simulated.');
}

// Initialize the SDK
// Use 'mumbai' for Polygon Testnet or 'mainnet' for production
const network = process.env.CHAIN_NETWORK || "mumbai";
let sdk;

if (ThirdwebSDK) {
    try {
        sdk = new ThirdwebSDK(network, {
            secretKey: process.env.THIRDWEB_SECRET_KEY, // Use secret key for backend
        });
    } catch (err) {
        console.warn("Failed to init ThirdwebSDK, falling back to mock.");
        sdk = null;
    }
}

if (!sdk) {
    sdk = {
        getContract: async () => ({
            call: async () => { throw new Error("SDK not available"); }
        })
    };
}

module.exports = sdk;
