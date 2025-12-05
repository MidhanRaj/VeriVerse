require('dotenv').config();

console.log('\n🔍 AI Provider API Key Diagnostic\n');
console.log('='.repeat(60));

// Check if keys are loaded
console.log('\n📋 Environment Variables Status:');
console.log('-'.repeat(60));

const keys = {
    'GEMINI_API_KEY': process.env.GEMINI_API_KEY,
    'OPENAI_API_KEY': process.env.OPENAI_API_KEY,
    'DEEPSEEK_API_KEY': process.env.DEEPSEEK_API_KEY
};

for (const [name, value] of Object.entries(keys)) {
    if (!value || value === `your_${name.toLowerCase()}_here`) {
        console.log(`❌ ${name}: NOT SET`);
    } else {
        const masked = value.substring(0, 10) + '...' + value.substring(value.length - 4);
        console.log(`✅ ${name}: ${masked}`);
    }
}

console.log('\n' + '='.repeat(60));
console.log('\n⚠️  IMPORTANT NOTES:\n');
console.log('1. API keys must be valid and have billing enabled');
console.log('2. Free tier keys may have limited quota');
console.log('3. Keys should start with:');
console.log('   - Gemini: AIzaSy...');
console.log('   - OpenAI: sk-proj-... or sk-...');
console.log('   - DeepSeek: sk-...');
console.log('\n4. To get valid API keys:');
console.log('   - Gemini: https://makersuite.google.com/app/apikey');
console.log('   - OpenAI: https://platform.openai.com/api-keys');
console.log('   - DeepSeek: https://platform.deepseek.com/');
console.log('\n' + '='.repeat(60) + '\n');
