const { runAgent, getAgent } = require('../services/agentRunner');
const { saveToIPFS } = require('../storage/ipfs');
const { createProof } = require('../blockchain/proofService');
const { runCrossCheck } = require('../services/crossCheck');

const runAgentController = async (req, res) => {
    try {
        const { agentId, input } = req.body;

        if (!agentId || !input) {
            return res.status(400).json({ error: 'Missing agentId or input' });
        }

        // 1. Run Agent (now returns error object instead of throwing)
        const result = await runAgent(agentId, input);

        // 2. Save to IPFS
        const cid = await saveToIPFS(result);

        // 3. Return result (even if it contains an error)
        res.json({
            success: !result.error, // false if agent returned error
            data: result,
            ipfsCid: cid
        });

    } catch (error) {
        // This should rarely happen now since runAgent returns errors gracefully
        console.error('Controller error:', error);
        res.json({
            success: false,
            error: error.message,
            data: {
                agentId: req.body.agentId,
                error: true,
                output: {
                    decision: 'ERROR',
                    reasoning: `System error: ${error.message}`
                }
            }
        });
    }
};

const getAgentController = (req, res) => {
    const agent = getAgent(req.params.id);
    if (!agent) {
        return res.status(404).json({ error: 'Agent not found' });
    }
    res.json(agent);
};

const crossCheckController = async (req, res) => {
    try {
        const { agentId, input, originalOutput } = req.body;
        const result = await runCrossCheck(agentId, input, originalOutput);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    runAgentController,
    getAgentController,
    crossCheckController
};
