require('dotenv').config();
const { callAI } = require('./services/aiProviders');

console.log('\n🧪 Testing Gemini with Fixed Model Name\n');
console.log('='.repeat(60));

async function testGemini() {
    console.log('\n📝 Testing Gemini API...');
    console.log(`   API Key loaded: ${process.env.GEMINI_API_KEY ? 'Yes' : 'No'}`);

    if (process.env.GEMINI_API_KEY) {
        console.log(`   Key starts with: ${process.env.GEMINI_API_KEY.substring(0, 10)}...`);
    }

    try {
        console.log('\n🤖 Calling Gemini with model: gemini-1.5-flash');
        const result = await callAI('Say hello in one sentence', {
            provider: 'gemini',
            maxTokens: 50,
            fallback: false
        });

        console.log(`\n✅ SUCCESS! Gemini is working!`);
        console.log(`   Response: ${result.response}`);
        console.log(`   Provider: ${result.provider}`);

    } catch (error) {
        console.error(`\n❌ FAILED: ${error.message}`);
        console.error(`   Full error:`, error);
    }
}

testGemini().then(() => {
    console.log('\n' + '='.repeat(60));
    console.log('✅ Test complete!\n');
    process.exit(0);
}).catch(err => {
    console.error('\n❌ Test failed:', err);
    process.exit(1);
});
