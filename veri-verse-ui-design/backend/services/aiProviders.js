const { GoogleGenerativeAI } = require('@google/generative-ai');
const OpenAI = require('openai');
const axios = require('axios');

/**
 * Multi-Provider AI Service
 * Supports: Gemini, OpenAI (ChatGPT), and DeepSeek
 */

// Provider initialization
let gemini = null;
let openai = null;
let deepseek = null;

// Provider availability tracking
const providerStatus = {
    gemini: false,
    openai: false,
    deepseek: false
};

/**
 * Initialize all AI providers
 */
const initializeProviders = () => {
    console.log('🤖 Initializing AI providers...');

    // Initialize Gemini
    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey && geminiKey !== 'your_gemini_api_key_here') {
        try {
            gemini = new GoogleGenerativeAI(geminiKey);
            providerStatus.gemini = true;
            console.log('✅ Gemini AI initialized');
        } catch (error) {
            console.error('❌ Failed to initialize Gemini:', error.message);
        }
    } else {
        console.warn('⚠️  Gemini API key not configured');
    }

    // Initialize OpenAI
    const openaiKey = process.env.OPENAI_API_KEY;
    if (openaiKey && openaiKey !== 'your_openai_api_key_here') {
        try {
            openai = new OpenAI({ apiKey: openaiKey });
            providerStatus.openai = true;
            console.log('✅ OpenAI (ChatGPT) initialized');
        } catch (error) {
            console.error('❌ Failed to initialize OpenAI:', error.message);
        }
    } else {
        console.warn('⚠️  OpenAI API key not configured');
    }

    // Initialize DeepSeek (REST API)
    const deepseekKey = process.env.DEEPSEEK_API_KEY;
    if (deepseekKey && deepseekKey !== 'your_deepseek_api_key_here') {
        deepseek = {
            apiKey: deepseekKey,
            baseURL: 'https://api.deepseek.com/v1'
        };
        providerStatus.deepseek = true;
        console.log('✅ DeepSeek AI initialized');
    } else {
        console.warn('⚠️  DeepSeek API key not configured');
    }

    const activeProviders = Object.values(providerStatus).filter(Boolean).length;
    console.log(`📊 Active AI providers: ${activeProviders}/3`);

    return activeProviders > 0;
};

/**
 * Call Gemini API
 */
const callGemini = async (prompt, options = {}) => {
    if (!gemini || !providerStatus.gemini) {
        throw new Error('Gemini not initialized');
    }

    const {
        model = 'gemini-1.5-flash',
        temperature = 0.7,
        maxTokens = 1000
    } = options;

    try {
        const generativeModel = gemini.getGenerativeModel({ model });
        const result = await generativeModel.generateContent({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: {
                temperature,
                maxOutputTokens: maxTokens,
            }
        });

        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error('Gemini API error:', error.message);
        throw error;
    }
};

/**
 * Call OpenAI API
 */
const callOpenAI = async (prompt, options = {}) => {
    if (!openai || !providerStatus.openai) {
        throw new Error('OpenAI not initialized');
    }

    const {
        model = 'gpt-3.5-turbo',
        temperature = 0.7,
        maxTokens = 1000,
        systemPrompt = 'You are a helpful AI assistant for content analysis and verification.'
    } = options;

    try {
        const response = await openai.chat.completions.create({
            model,
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: prompt }
            ],
            temperature,
            max_tokens: maxTokens
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error('OpenAI API error:', error.message);
        throw error;
    }
};

/**
 * Call DeepSeek API
 */
const callDeepSeek = async (prompt, options = {}) => {
    if (!deepseek || !providerStatus.deepseek) {
        throw new Error('DeepSeek not initialized');
    }

    const {
        model = 'deepseek-chat',
        temperature = 0.7,
        maxTokens = 1000,
        systemPrompt = 'You are a helpful AI assistant for content analysis and verification.'
    } = options;

    try {
        const response = await axios.post(
            `${deepseek.baseURL}/chat/completions`,
            {
                model,
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: prompt }
                ],
                temperature,
                max_tokens: maxTokens
            },
            {
                headers: {
                    'Authorization': `Bearer ${deepseek.apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('DeepSeek API error:', error.response?.data || error.message);
        throw error;
    }
};

/**
 * Universal AI call with automatic provider selection and fallback
 */
const callAI = async (prompt, options = {}) => {
    const {
        provider = 'auto', // 'auto', 'gemini', 'openai', 'deepseek'
        fallback = true,
        ...otherOptions
    } = options;

    // Determine provider order
    let providers = [];
    if (provider === 'auto') {
        // Default priority: OpenAI > Gemini > DeepSeek
        if (providerStatus.openai) providers.push('openai');
        if (providerStatus.gemini) providers.push('gemini');
        if (providerStatus.deepseek) providers.push('deepseek');
    } else {
        providers = [provider];
        if (fallback) {
            // Add other providers as fallback
            if (provider !== 'openai' && providerStatus.openai) providers.push('openai');
            if (provider !== 'gemini' && providerStatus.gemini) providers.push('gemini');
            if (provider !== 'deepseek' && providerStatus.deepseek) providers.push('deepseek');
        }
    }

    if (providers.length === 0) {
        throw new Error('No AI providers available');
    }

    // Try each provider in order
    let lastError = null;
    for (const prov of providers) {
        try {
            console.log(`🤖 Calling ${prov.toUpperCase()}...`);
            let response;

            switch (prov) {
                case 'gemini':
                    response = await callGemini(prompt, otherOptions);
                    break;
                case 'openai':
                    response = await callOpenAI(prompt, otherOptions);
                    break;
                case 'deepseek':
                    response = await callDeepSeek(prompt, otherOptions);
                    break;
                default:
                    throw new Error(`Unknown provider: ${prov}`);
            }

            console.log(`✅ ${prov.toUpperCase()} responded successfully`);
            return {
                response,
                provider: prov,
                success: true
            };
        } catch (error) {
            console.warn(`⚠️  ${prov.toUpperCase()} failed:`, error.message);
            lastError = error;
            // Continue to next provider
        }
    }

    // All providers failed
    throw new Error(`All AI providers failed. Last error: ${lastError?.message}`);
};

/**
 * Call multiple providers and get consensus
 */
const callWithConsensus = async (prompt, options = {}) => {
    const {
        providers = ['gemini', 'openai', 'deepseek'],
        minProviders = 2,
        ...otherOptions
    } = options;

    // Filter to only available providers
    const availableProviders = providers.filter(p => providerStatus[p]);

    if (availableProviders.length < minProviders) {
        console.warn(`⚠️  Only ${availableProviders.length} providers available, need ${minProviders}`);
        // Fall back to single provider
        return await callAI(prompt, { ...otherOptions, provider: 'auto' });
    }

    console.log(`🔄 Calling ${availableProviders.length} providers for consensus...`);

    // Call all providers in parallel
    const results = await Promise.allSettled(
        availableProviders.map(async (provider) => {
            try {
                const result = await callAI(prompt, { ...otherOptions, provider, fallback: false });
                return {
                    provider,
                    response: result.response,
                    success: true
                };
            } catch (error) {
                return {
                    provider,
                    error: error.message,
                    success: false
                };
            }
        })
    );

    // Extract successful responses
    const successful = results
        .filter(r => r.status === 'fulfilled' && r.value.success)
        .map(r => r.value);

    if (successful.length === 0) {
        throw new Error('All providers failed in consensus call');
    }

    // Calculate consensus
    const responses = successful.map(r => r.response);
    const providers_used = successful.map(r => r.provider);

    return {
        responses,
        providers: providers_used,
        count: successful.length,
        consensus: successful.length >= minProviders,
        primary: responses[0], // First successful response
        all: successful
    };
};

/**
 * Get provider status
 */
const getProviderStatus = () => {
    return {
        ...providerStatus,
        activeCount: Object.values(providerStatus).filter(Boolean).length,
        totalCount: 3
    };
};

// Initialize on module load
initializeProviders();

module.exports = {
    callAI,
    callWithConsensus,
    callGemini,
    callOpenAI,
    callDeepSeek,
    getProviderStatus,
    isConfigured: () => Object.values(providerStatus).some(Boolean)
};
