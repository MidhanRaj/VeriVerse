const AgentBase = require('./agentBase');
const { assessTransactionRisk } = require('../services/aiService');

class RiskAgent extends AgentBase {
    constructor() {
        super('risk-agent', 'Transaction Risk Agent');
    }

    async run(input) {
        console.log(`[${this.name}] Assessing risk for: ${input}`);

        try {
            // Use OpenAI for real risk assessment
            const analysis = await assessTransactionRisk(input);

            return {
                riskScore: analysis.riskScore,
                level: analysis.riskLevel,
                warnings: analysis.warnings,
                analysis: analysis.analysis,
                timestamp: analysis.timestamp
            };
        } catch (error) {
            console.error(`[${this.name}] Error:`, error.message);
            // Fallback to simple risk analysis
            const amount = parseFloat(input.amount) || 0;
            let riskScore = amount > 1000 ? 50 : 20;

            return {
                riskScore: riskScore,
                level: riskScore > 70 ? 'HIGH' : (riskScore > 30 ? 'MEDIUM' : 'LOW'),
                warnings: ['AI analysis unavailable'],
                timestamp: new Date().toISOString()
            };
        }
    }

    explainDecision(output) {
        return `Transaction risk level is ${output.level} (Score: ${output.riskScore}). Warnings: ${output.warnings.length > 0 ? output.warnings.join('; ') : 'None'}.`;
    }
}

module.exports = new RiskAgent();
