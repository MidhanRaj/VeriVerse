const { readDB, writeDB } = require('../storage/db');
const { runCrossCheck } = require('./crossCheck');

const createDispute = async (proofId, challengerExplanation) => {
    const db = readDB();
    const proof = db.proofs.find(p => p.proofId === proofId);

    if (!proof) {
        throw new Error("Proof not found");
    }

    const disputeId = `dispute-${Date.now()}`;

    // Run cross-check to auto-resolve
    // In a real system, this might be triggered manually or async
    // We need the original input to re-run agents. 
    // Assuming proof stores IPFS CID, and we can fetch input from there.
    // For this demo, we'll mock the input or assume it's passed/stored.

    const crossCheckResult = await runCrossCheck(proof.agentId, { mock: "input" }, {});

    const outcome = crossCheckResult.consensus === "FLAGGED" ? "Valid Challenge" : "Rejected Challenge";

    const dispute = {
        id: disputeId,
        proofId,
        challengerExplanation,
        crossCheckResult,
        outcome,
        status: "RESOLVED", // Auto-resolved for demo
        timestamp: new Date().toISOString()
    };

    db.disputes.push(dispute);

    // Update Reputation
    const agent = db.agents.find(a => a.id === proof.agentId);
    if (agent) {
        if (outcome === "Valid Challenge") {
            agent.score -= 5;
        } else {
            // Maybe penalize challenger?
        }
        writeDB(db);
    }

    return dispute;
};

const getDisputes = () => {
    const db = readDB();
    return db.disputes;
};

const getDispute = (id) => {
    const db = readDB();
    return db.disputes.find(d => d.id === id);
};

module.exports = {
    createDispute,
    getDisputes,
    getDispute
};
