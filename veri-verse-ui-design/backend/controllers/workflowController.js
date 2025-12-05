const { saveWorkflow, runWorkflow } = require('../services/workflow');

const saveWorkflowController = (req, res) => {
    try {
        const workflow = saveWorkflow(req.body);
        res.json({ success: true, workflow });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const runWorkflowController = async (req, res) => {
    try {
        const { workflowId, input } = req.body;
        const result = await runWorkflow(workflowId, input);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    saveWorkflowController,
    runWorkflowController
};
