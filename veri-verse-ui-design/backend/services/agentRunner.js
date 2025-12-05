const moderationAgent = require('../agents/moderationAgent');
const contractAgent = require('../agents/contractAgent');
const riskAgent = require('../agents/riskAgent');
const misinfoAgent = require('../agents/misinfoAgent');
const { readDB, writeDB } = require('../storage/db');

const agents = {
    [moderationAgent.id]: moderationAgent,
    [contractAgent.id]: contractAgent,
    [riskAgent.id]: riskAgent,
    [misinfoAgent.id]: misinfoAgent
};

const runAgent = async (agentId, input) => {
    const agent = agents[agentId];
    if (!agent) {
        throw new Error(`Agent with ID ${agentId} not found`);
    }

    try {
        const output = await agent.run(input);
        const explanation = agent.explainDecision(output);

        // Update stats in DB
        const db = readDB();
        const agentRecord = db.agents.find(a => a.id === agentId);
        if (agentRecord) {
            agentRecord.runs += 1;
            writeDB(db);
        }

        return {
            agentId,
            agentName: agent.name,
            input,
            output,
            explanation,
            timestamp: new Date().toISOString()
        };
    } catch (error) {
        console.error(`Error running agent ${agentId}:`, error);

        // Return a graceful error response instead of throwing
        return {
            agentId,
            agentName: agent.name,
            input,
            output: {
                decision: 'ERROR',
                confidence: 0,
                flags: ['agent_error'],
                reasoning: `Agent execution failed: ${error.message}. Please check backend logs for details.`,
                error: true
            },
            explanation: `Agent failed to execute: ${error.message}`,
            timestamp: new Date().toISOString(),
            error: true
        };
    }
};

const getAgent = (agentId) => {
    const db = readDB();
    return db.agents.find(a => a.id === agentId);
};

module.exports = {
    runAgent,
    getAgent,
    agents // Export map for other services if needed
};
