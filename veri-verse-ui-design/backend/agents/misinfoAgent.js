const AgentBase = require('./agentBase');
const { checkMisinformation } = require('../services/aiService');

class MisinfoAgent extends AgentBase {
    constructor() {
        super('misinfo-agent', 'Misinformation Checker');
    }

    async run(input) {
        console.log(`[${this.name}] Checking for misinformation: ${input}`);

        try {
            // Use smart auto mode: consensus if 2+ providers, single if 1, mock if 0
            const analysis = await checkMisinformation(input, { useConsensus: 'auto' });

            return {
                isCredible: analysis.verdict === 'TRUE',
                verdict: analysis.verdict,
                analysis: analysis.analysis,
                confidence: analysis.confidence,
                timestamp: analysis.timestamp,
                // Include consensus data if available
                consensus: analysis.consensus || null,
                sources: analysis.sources || []
            };
        } catch (error) {
            console.error(`[${this.name}] Error:`, error.message);
            // Fallback to keyword-based checking
            const suspiciousKeywords = ['fake', 'scam', 'guaranteed returns', '100x'];
            const foundKeywords = suspiciousKeywords.filter(k => input.toLowerCase().includes(k));

            return {
                isCredible: foundKeywords.length === 0,
                verdict: foundKeywords.length === 0 ? 'UNVERIFIED' : 'SUSPICIOUS',
                flaggedKeywords: foundKeywords,
                timestamp: new Date().toISOString(),
                fallbackMode: true
            };
        }
    }

    explainDecision(output) {
        let explanation = '';

        if (output.isCredible) {
            explanation = `Content appears credible. ${output.analysis || 'No suspicious indicators found.'}`;
        } else {
            explanation = `Potential misinformation detected. ${output.analysis || 'Flagged for review.'}`;
        }

        // Add consensus information if available
        if (output.consensus) {
            const { providersUsed, agreement, providerCount } = output.consensus;
            explanation += `\n\nMulti-Provider Analysis: ${providerCount} AI providers consulted (${providersUsed.join(', ')}). Agreement: ${agreement}%`;
        }

        return explanation;
    }
}

module.exports = new MisinfoAgent();
