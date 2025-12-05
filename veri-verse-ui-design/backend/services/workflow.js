const { runAgent } = require('./agentRunner');
const { saveToIPFS } = require('../storage/ipfs');
const { createProof } = require('../blockchain/proofService');
const { readDB, writeDB } = require('../storage/db');

const saveWorkflow = (workflowConfig) => {
    const db = readDB();
    const id = `wf-${Date.now()}`;
    const workflow = { id, ...workflowConfig, timestamp: new Date().toISOString() };
    db.workflows.push(workflow);
    writeDB(db);
    return workflow;
};

const runWorkflow = async (workflowId, initialInput) => {
    const db = readDB();
    const workflow = db.workflows.find(w => w.id === workflowId);

    if (!workflow) {
        // Allow running ad-hoc workflow if passed as object
        // throw new Error("Workflow not found");
    }

    // Example workflow structure: { steps: [{ agentId: '...' }, { agentId: '...' }] }
    // For this demo, we'll assume the input contains the steps if workflowId is 'ad-hoc'
    const steps = workflow ? workflow.steps : (initialInput.steps || []);

    let currentInput = initialInput.data || initialInput;
    const results = [];

    for (const step of steps) {
        console.log(`Running workflow step: ${step.agentId}`);
        const result = await runAgent(step.agentId, currentInput);

        // Save intermediate result to IPFS
        const cid = await saveToIPFS(result);

        // Create Proof
        const proof = await createProof(`proof-${Date.now()}`, step.agentId, cid);

        results.push({
            step: step.agentId,
            output: result,
            proof
        });

        // Pass output to next agent? 
        // For simplicity, we'll keep using original input or specific output field
        // currentInput = result.output; 
    }

    return {
        workflowId,
        status: "COMPLETED",
        results
    };
};

module.exports = {
    saveWorkflow,
    runWorkflow
};
