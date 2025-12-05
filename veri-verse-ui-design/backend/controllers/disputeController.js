const { createDispute, getDisputes, getDispute } = require('../services/dispute');

const createDisputeController = async (req, res) => {
    try {
        const { proofId, explanation } = req.body;
        const dispute = await createDispute(proofId, explanation);
        res.json({ success: true, dispute });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDisputesController = (req, res) => {
    const disputes = getDisputes();
    res.json(disputes);
};

const getDisputeController = (req, res) => {
    const dispute = getDispute(req.params.id);
    if (!dispute) {
        return res.status(404).json({ error: 'Dispute not found' });
    }
    res.json(dispute);
};

module.exports = {
    createDisputeController,
    getDisputesController,
    getDisputeController
};
