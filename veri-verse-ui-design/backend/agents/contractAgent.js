const AgentBase = require('./agentBase');
const { analyzeSmartContract } = require('../services/aiService');

class ContractSummaryAgent extends AgentBase {
    constructor() {
        super('contract-agent', 'Contract Summary Agent');
    }

    async run(input) {
        console.log(`[${this.name}] Analyzing contract: ${input.substring(0, 50)}...`);

        try {
            // Use OpenAI for real contract analysis
            const analysis = await analyzeSmartContract(input);

            return {
                summary: analysis.analysis,
                riskLevel: analysis.riskLevel,
                keyFeatures: ['AI-Analyzed'],
                analysis: analysis.analysis,
                timestamp: analysis.timestamp
            };
        } catch (error) {
            console.error(`[${this.name}] Error:`, error.message);
            // Fallback to simple summary
            return {
                summary: 'Contract analysis unavailable. AI service error.',
                riskLevel: 'MEDIUM',
                keyFeatures: ['Not Analyzed'],
                timestamp: new Date().toISOString()
            };
        }
    }

    explainDecision(output) {
        return `Contract summarized as ${output.riskLevel} risk. Key features identified: ${output.keyFeatures.join(', ')}.`;
    }
}

module.exports = new ContractSummaryAgent();
