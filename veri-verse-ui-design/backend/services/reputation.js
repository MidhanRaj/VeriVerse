const { readDB, writeDB } = require('../storage/db');

const getAgentReputation = (agentId) => {
    const db = readDB();
    const agent = db.agents.find(a => a.id === agentId);

    if (!agent) return null;

    // Calculate stats
    const disputes = db.disputes.filter(d => {
        const proof = db.proofs.find(p => p.proofId === d.proofId);
        return proof && proof.agentId === agentId;
    });

    const validDisputes = disputes.filter(d => d.outcome === "Valid Challenge").length;
    const rejectedDisputes = disputes.length - validDisputes;

    return {
        agentId: agent.id,
        name: agent.name,
        score: agent.score,
        statistics: {
            runs: agent.runs,
            disputes: disputes.length,
            wins: rejectedDisputes,
            losses: validDisputes,
            agreementRate: agent.runs > 0 ? ((agent.runs - validDisputes) / agent.runs).toFixed(2) : 1.0
        }
    };
};

module.exports = {
    getAgentReputation
};
