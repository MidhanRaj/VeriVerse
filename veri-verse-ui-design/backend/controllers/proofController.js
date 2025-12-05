const { createProof, verifyProof } = require('../blockchain/proofService');
const { saveToIPFS } = require('../storage/ipfs');

const createProofController = async (req, res) => {
    try {
        const { proofId, agentId, ipfsHash } = req.body;

        if (!proofId || !agentId || !ipfsHash) {
            // Return 200 with error details instead of 400
            return res.json({
                success: false,
                error: 'Missing required fields: proofId, agentId, and ipfsHash are required'
            });
        }

        const proof = await createProof(proofId, agentId, ipfsHash);
        res.json({ success: true, proof });

    } catch (error) {
        // Return 200 with error details instead of 500
        console.error('Proof creation error:', error);
        res.json({
            success: false,
            error: error.message,
            proof: {
                simulated: true,
                error: true
            }
        });
    }
};

const verifyProofController = async (req, res) => {
    try {
        const { proofId } = req.body;
        const result = await verifyProof(proofId);
        res.json(result);
    } catch (error) {
        res.status(404).json({ valid: false, error: error.message });
    }
};

const getProofController = async (req, res) => {
    try {
        const result = await verifyProof(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(404).json({ error: 'Proof not found' });
    }
};

const saveToIpfsController = async (req, res) => {
    try {
        const cid = await saveToIPFS(req.body);
        res.json({ cid });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createProofController,
    verifyProofController,
    getProofController,
    saveToIpfsController
};
