require('dotenv').config();
const { analyzeContentModeration } = require('./services/aiService');

console.log('\n🧪 Testing Context-Aware Moderation\n');
console.log('='.repeat(70));

async function testContextAware() {
    const testCases = [
        {
            name: "Educational Content (Wikipedia-style)",
            content: "World War II was a global conflict that involved violence and attacks across multiple continents. The war caused significant harm to civilian populations."
        },
        {
            name: "Historical Content",
            content: "The assassination of Julius Caesar was a violent attack carried out by Roman senators in 44 BC."
        },
        {
            name: "Actual Threat",
            content: "I will kill you if you don't give me your money"
        },
        {
            name: "Safe Comment",
            content: "This is a really interesting article about history"
        }
    ];

    for (const test of testCases) {
        console.log(`\n📝 ${test.name}`);
        console.log(`   Input: "${test.content.substring(0, 80)}..."`);
        console.log('-'.repeat(70));

        try {
            const result = await analyzeContentModeration(test.content);

            console.log(`\n   Decision: ${result.decision}`);
            console.log(`   Confidence: ${(result.confidence * 100).toFixed(1)}%`);
            console.log(`   Flags: ${result.flags.length > 0 ? result.flags.join(', ') : 'None'}`);
            console.log(`\n   Reasoning: ${result.reasoning}`);

        } catch (error) {
            console.error(`   ❌ Error: ${error.message}`);
        }

        console.log('\n' + '='.repeat(70));
    }
}

testContextAware().then(() => {
    console.log('\n✅ Testing complete!\n');
    process.exit(0);
}).catch(err => {
    console.error('\n❌ Test failed:', err);
    process.exit(1);
});
