const AgentBase = require('./agentBase');
const { analyzeContentModeration } = require('../services/aiService');

class ModerationAgent extends AgentBase {
    constructor() {
        super('moderation-agent', 'Moderation Agent');
    }

    async run(input) {
        console.log(`[${this.name}] Processing: ${input}`);

        try {
            // Use OpenAI for real content moderation
            const analysis = await analyzeContentModeration(input);

            return {
                decision: analysis.decision,
                confidence: analysis.confidence,
                flags: analysis.flags,
                reasoning: analysis.reasoning,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            console.error(`[${this.name}] Error:`, error.message);
            // Fallback to simple logic if AI fails
            const isSafe = !input.toLowerCase().includes('bad');
            return {
                decision: isSafe ? 'APPROVE' : 'REJECT',
                confidence: 0.75,
                flags: isSafe ? [] : ['inappropriate_content'],
                reasoning: 'Fallback analysis due to AI service error',
                timestamp: new Date().toISOString()
            };
        }
    }

    explainDecision(output) {
        if (output.decision === 'APPROVE') {
            return `Content was approved with ${(output.confidence * 100).toFixed(1)}% confidence. ${output.reasoning || 'No issues detected.'}`;
        } else {
            const flagsText = output.flags.length > 0 ? `Flags: ${output.flags.join(', ')}. ` : '';
            return `Content was rejected. ${flagsText}${output.reasoning || ''} Confidence: ${(output.confidence * 100).toFixed(1)}%.`;
        }
    }
}

module.exports = new ModerationAgent();
