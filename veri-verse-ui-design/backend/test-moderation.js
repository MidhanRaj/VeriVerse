require('dotenv').config();
const { analyzeContentModeration } = require('./services/aiService');

console.log('\n🧪 Testing Enhanced Moderation with Links\n');
console.log('='.repeat(60));

async function testModeration() {
    const testCases = [
        {
            name: "Legitimate Link",
            content: "Check out this article: https://example.com/interesting-article"
        },
        {
            name: "Suspicious Scam Link",
            content: "URGENT! Click here now to claim your FREE MONEY: https://suspicious-site.com/claim-now"
        },
        {
            name: "Group Promotional Text",
            content: "Join our Telegram group for exclusive crypto signals! Limited time offer, act now!"
        },
        {
            name: "Safe Content",
            content: "Hello, how are you doing today?"
        }
    ];

    for (const test of testCases) {
        console.log(`\n📝 Test: ${test.name}`);
        console.log(`   Content: "${test.content}"`);
        console.log('-'.repeat(60));

        try {
            const result = await analyzeContentModeration(test.content);

            console.log(`\n   Decision: ${result.decision}`);
            console.log(`   Confidence: ${(result.confidence * 100).toFixed(1)}%`);
            console.log(`   Flags: ${result.flags.length > 0 ? result.flags.join(', ') : 'None'}`);
            console.log(`   Mode: ${result.mode || 'N/A'}`);
            console.log(`\n   Reasoning:`);
            console.log(`   ${result.reasoning}`);

        } catch (error) {
            console.error(`   ❌ Error: ${error.message}`);
        }

        console.log('\n' + '='.repeat(60));
    }
}

testModeration().then(() => {
    console.log('\n✅ Testing complete!\n');
    process.exit(0);
}).catch(err => {
    console.error('\n❌ Test failed:', err);
    process.exit(1);
});
