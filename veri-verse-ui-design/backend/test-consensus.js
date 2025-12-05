require('dotenv').config();
const axios = require('axios');

const API_BASE = 'http://localhost:3001/api';

/**
 * Test Multi-Provider Consensus System
 */

async function testConsensusAnalysis() {
    console.log('\n🧪 Testing Multi-Provider AI Consensus System\n');
    console.log('='.repeat(60));

    const testClaims = [
        {
            claim: "The Earth is flat",
            expectedVerdict: "FALSE",
            description: "Known false claim"
        },
        {
            claim: "Water boils at 100°C at sea level",
            expectedVerdict: "TRUE",
            description: "Known true fact"
        },
        {
            claim: "Aliens visited Earth in 2024",
            expectedVerdict: "UNVERIFIED",
            description: "Unverifiable claim"
        }
    ];

    for (const test of testClaims) {
        console.log(`\n📝 Test: ${test.description}`);
        console.log(`   Claim: "${test.claim}"`);
        console.log(`   Expected: ${test.expectedVerdict}`);
        console.log('-'.repeat(60));

        try {
            const response = await axios.post(`${API_BASE}/analyze-truthfulness`, {
                claim: test.claim
            });

            const { result } = response.data;

            console.log(`\n✅ Response received:`);
            console.log(`   Verdict: ${result.verdict}`);
            console.log(`   Confidence: ${(result.confidence * 100).toFixed(1)}%`);

            if (result.consensus) {
                console.log(`\n   📊 Consensus Information:`);
                console.log(`      Providers: ${result.consensus.providersUsed.join(', ')}`);
                console.log(`      Provider Count: ${result.consensus.providerCount}`);
                console.log(`      Agreement: ${result.consensus.agreement}%`);
                console.log(`      Has Consensus: ${result.consensus.hasConsensus}`);

                if (result.consensus.providerResults && result.consensus.providerResults.length > 0) {
                    console.log(`\n   🤖 Individual Provider Results:`);
                    result.consensus.providerResults.forEach(pr => {
                        console.log(`      ${pr.provider.toUpperCase()}:`);
                        console.log(`         Verdict: ${pr.verdict}`);
                        console.log(`         Confidence: ${(pr.confidence * 100).toFixed(1)}%`);
                    });
                }
            }

            console.log(`\n   Analysis: ${result.analysis.substring(0, 150)}...`);

            // Check if verdict matches expected
            const match = result.verdict === test.expectedVerdict;
            console.log(`\n   ${match ? '✅ PASS' : '⚠️  DIFFERENT'}: Verdict ${match ? 'matches' : 'differs from'} expected`);

        } catch (error) {
            console.error(`\n❌ Error:`, error.response?.data || error.message);
        }

        console.log('\n' + '='.repeat(60));
    }

    console.log('\n✅ Consensus testing complete!\n');
}

async function testMisinfoAgent() {
    console.log('\n🧪 Testing Misinformation Agent with Consensus\n');
    console.log('='.repeat(60));

    try {
        const response = await axios.post(`${API_BASE}/run-agent`, {
            agentId: 'misinfo-agent',
            input: 'The moon landing was faked'
        });

        console.log('\n✅ Agent Response:');
        console.log(JSON.stringify(response.data, null, 2));

    } catch (error) {
        console.error('\n❌ Error:', error.response?.data || error.message);
    }

    console.log('\n' + '='.repeat(60));
}

// Run tests
async function runAllTests() {
    console.log('\n🚀 Starting Multi-Provider AI Consensus Tests\n');

    try {
        await testConsensusAnalysis();
        await testMisinfoAgent();

        console.log('\n✅ All tests completed!\n');
    } catch (error) {
        console.error('\n❌ Test suite error:', error.message);
    }
}

runAllTests();
