const { checkMisinformation } = require('../services/aiService');

/**
 * Consensus Controller
 * Dedicated endpoint for multi-provider truthfulness analysis
 */

/**
 * Analyze truthfulness using multi-provider consensus
 * POST /api/analyze-truthfulness
 */
const analyzeTruthfulness = async (req, res) => {
    try {
        const { claim } = req.body;

        if (!claim) {
            return res.status(400).json({
                error: 'Missing required field: claim'
            });
        }

        console.log(`\n🔍 Analyzing truthfulness with multi-provider consensus...`);
        console.log(`   Claim: "${claim}"`);

        // Use consensus mode (all 3 providers)
        const result = await checkMisinformation(claim, { useConsensus: true });

        console.log(`✅ Analysis complete`);
        if (result.consensus) {
            console.log(`   Providers: ${result.consensus.providersUsed.join(', ')}`);
            console.log(`   Agreement: ${result.consensus.agreement}%`);
            console.log(`   Verdict: ${result.verdict}`);
        }

        res.json({
            success: true,
            claim,
            result,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Truthfulness analysis error:', error);
        res.status(500).json({
            success: false,
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
};

/**
 * Get detailed consensus breakdown
 * POST /api/consensus-details
 */
const getConsensusDetails = async (req, res) => {
    try {
        const { claim } = req.body;

        if (!claim) {
            return res.status(400).json({
                error: 'Missing required field: claim'
            });
        }

        const result = await checkMisinformation(claim, { useConsensus: true });

        // Return detailed breakdown
        res.json({
            success: true,
            claim,
            finalVerdict: result.verdict,
            finalConfidence: result.confidence,
            consensus: result.consensus || {
                message: 'Consensus data not available'
            },
            providerBreakdown: result.consensus?.providerResults || [],
            timestamp: result.timestamp
        });

    } catch (error) {
        console.error('Consensus details error:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

module.exports = {
    analyzeTruthfulness,
    getConsensusDetails
};
