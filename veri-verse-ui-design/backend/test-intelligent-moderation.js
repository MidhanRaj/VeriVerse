require('dotenv').config();
const { analyzeContentModeration } = require('./services/aiService');

console.log('\n🧪 Testing Intelligent Content Analysis\n');
console.log('='.repeat(70));

async function testIntelligentModeration() {
    const testCases = [
        {
            name: "Comment/Greeting",
            content: "Hello! How are you doing today?"
        },
        {
            name: "True Fact",
            content: "The Earth is round and orbits around the sun"
        },
        {
            name: "False Claim",
            content: "The Earth is flat"
        },
        {
            name: "False Claim - Vaccines",
            content: "Vaccines cause autism"
        },
        {
            name: "Unverifiable Claim",
            content: "Aliens visited Earth in 2024"
        },
        {
            name: "Link with Scam",
            content: "URGENT! Click here NOW to claim your FREE MONEY: https://scam.com"
        },
        {
            name: "Safe Link",
            content: "Check out this article: https://wikipedia.org/article"
        }
    ];

    for (const test of testCases) {
        console.log(`\n📝 ${test.name}`);
        console.log(`   Input: "${test.content}"`);
        console.log('-'.repeat(70));

        try {
            const result = await analyzeContentModeration(test.content);

            console.log(`\n   ✅ Decision: ${result.decision}`);
            console.log(`   📊 Confidence: ${(result.confidence * 100).toFixed(1)}%`);
            console.log(`   🏷️  Flags: ${result.flags.length > 0 ? result.flags.join(', ') : 'None'}`);
            console.log(`   🤖 Mode: ${result.mode || 'N/A'}`);
            console.log(`\n   💬 Analysis:`);
            console.log(`   ${result.reasoning}`);

        } catch (error) {
            console.error(`   ❌ Error: ${error.message}`);
        }

        console.log('\n' + '='.repeat(70));
    }
}

testIntelligentModeration().then(() => {
    console.log('\n✅ All tests complete!\n');
    process.exit(0);
}).catch(err => {
    console.error('\n❌ Test failed:', err);
    process.exit(1);
});
