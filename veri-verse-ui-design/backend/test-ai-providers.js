require('dotenv').config();
const { callAI, callWithConsensus, getProviderStatus } = require('./services/aiProviders');
const {
    analyzeContentModeration,
    analyzeSmartContract,
    assessTransactionRisk,
    checkMisinformation,
    getServiceStatus
} = require('./services/aiService');

console.log('🧪 Testing Multi-Provider AI Integration\n');
console.log('='.repeat(60));

async function testProviderStatus() {
    console.log('\n📊 Provider Status Check:');
    console.log('-'.repeat(60));

    const status = getProviderStatus();
    console.log(`Active Providers: ${status.activeCount}/${status.totalCount}`);
    console.log(`  - Gemini: ${status.gemini ? '✅' : '❌'}`);
    console.log(`  - OpenAI: ${status.openai ? '✅' : '❌'}`);
    console.log(`  - DeepSeek: ${status.deepseek ? '✅' : '❌'}`);

    return status.activeCount > 0;
}

async function testIndividualProviders() {
    console.log('\n🤖 Testing Individual Providers:');
    console.log('-'.repeat(60));

    const testPrompt = 'Say "Hello from AI" and identify yourself.';

    // Test Gemini
    try {
        console.log('\n1️⃣ Testing Gemini...');
        const result = await callAI(testPrompt, { provider: 'gemini', fallback: false });
        console.log(`✅ Gemini Response: ${result.response.substring(0, 100)}...`);
    } catch (error) {
        console.log(`❌ Gemini Failed: ${error.message}`);
    }

    // Test OpenAI
    try {
        console.log('\n2️⃣ Testing OpenAI...');
        const result = await callAI(testPrompt, { provider: 'openai', fallback: false });
        console.log(`✅ OpenAI Response: ${result.response.substring(0, 100)}...`);
    } catch (error) {
        console.log(`❌ OpenAI Failed: ${error.message}`);
    }

    // Test DeepSeek
    try {
        console.log('\n3️⃣ Testing DeepSeek...');
        const result = await callAI(testPrompt, { provider: 'deepseek', fallback: false });
        console.log(`✅ DeepSeek Response: ${result.response.substring(0, 100)}...`);
    } catch (error) {
        console.log(`❌ DeepSeek Failed: ${error.message}`);
    }
}

async function testConsensus() {
    console.log('\n🔄 Testing Consensus Mode:');
    console.log('-'.repeat(60));

    try {
        const prompt = 'Is the sky blue? Answer with YES or NO and brief reasoning.';
        console.log(`\nPrompt: "${prompt}"`);

        const result = await callWithConsensus(prompt, {
            providers: ['gemini', 'openai', 'deepseek'],
            minProviders: 2,
            maxTokens: 100
        });

        console.log(`\n✅ Consensus achieved with ${result.count} providers:`);
        result.all.forEach((r, i) => {
            console.log(`\n  ${i + 1}. ${r.provider.toUpperCase()}:`);
            console.log(`     ${r.response.substring(0, 80)}...`);
        });
    } catch (error) {
        console.log(`❌ Consensus test failed: ${error.message}`);
    }
}

async function testAgentFunctions() {
    console.log('\n🎯 Testing Agent Functions:');
    console.log('-'.repeat(60));

    // Test Content Moderation
    try {
        console.log('\n1️⃣ Testing Content Moderation...');
        const result = await analyzeContentModeration('This is a test message about AI safety.');
        console.log(`✅ Decision: ${result.decision}`);
        console.log(`   Confidence: ${(result.confidence * 100).toFixed(1)}%`);
        console.log(`   Reasoning: ${result.reasoning.substring(0, 100)}...`);
    } catch (error) {
        console.log(`❌ Moderation test failed: ${error.message}`);
    }

    // Test Smart Contract Analysis
    try {
        console.log('\n2️⃣ Testing Smart Contract Analysis...');
        const sampleCode = 'function transfer(address to, uint amount) public { balances[to] += amount; }';
        const result = await analyzeSmartContract(sampleCode);
        console.log(`✅ Risk Level: ${result.riskLevel}`);
        console.log(`   Analysis: ${result.analysis.substring(0, 100)}...`);
    } catch (error) {
        console.log(`❌ Contract analysis failed: ${error.message}`);
    }

    // Test Risk Assessment
    try {
        console.log('\n3️⃣ Testing Transaction Risk Assessment...');
        const tx = { to: '0x123...', value: '1000', from: '0xabc...' };
        const result = await assessTransactionRisk(tx);
        console.log(`✅ Risk Score: ${result.riskScore}/100`);
        console.log(`   Risk Level: ${result.riskLevel}`);
        console.log(`   Analysis: ${result.analysis.substring(0, 100)}...`);
    } catch (error) {
        console.log(`❌ Risk assessment failed: ${error.message}`);
    }

    // Test Misinformation Check
    try {
        console.log('\n4️⃣ Testing Misinformation Check...');
        const result = await checkMisinformation('The Earth is round.', { useConsensus: false });
        console.log(`✅ Verdict: ${result.verdict}`);
        console.log(`   Confidence: ${(result.confidence * 100).toFixed(1)}%`);
        console.log(`   Analysis: ${result.analysis.substring(0, 100)}...`);
    } catch (error) {
        console.log(`❌ Misinformation check failed: ${error.message}`);
    }
}

async function testServiceStatus() {
    console.log('\n📈 Service Status:');
    console.log('-'.repeat(60));

    const status = getServiceStatus();
    console.log(`\nConfigured: ${status.isConfigured ? '✅' : '❌'}`);
    console.log(`\nCapabilities:`);
    console.log(`  - Content Moderation: ${status.capabilities.moderation ? '✅' : '❌'}`);
    console.log(`  - Contract Analysis: ${status.capabilities.contractAnalysis ? '✅' : '❌'}`);
    console.log(`  - Risk Assessment: ${status.capabilities.riskAssessment ? '✅' : '❌'}`);
    console.log(`  - Fact Checking: ${status.capabilities.factChecking ? '✅' : '❌'}`);
    console.log(`  - Consensus Mode: ${status.capabilities.consensus ? '✅' : '❌'}`);
}

async function runAllTests() {
    try {
        // Check provider status
        const hasProviders = await testProviderStatus();

        if (!hasProviders) {
            console.log('\n❌ No AI providers configured. Please check your .env file.');
            console.log('\nRequired environment variables:');
            console.log('  - GEMINI_API_KEY');
            console.log('  - OPENAI_API_KEY');
            console.log('  - DEEPSEEK_API_KEY');
            return;
        }

        // Run tests
        await testIndividualProviders();
        await testConsensus();
        await testAgentFunctions();
        await testServiceStatus();

        console.log('\n' + '='.repeat(60));
        console.log('✅ All tests completed!');
        console.log('='.repeat(60) + '\n');

    } catch (error) {
        console.error('\n❌ Test suite failed:', error);
    }
}

// Run tests
runAllTests();
