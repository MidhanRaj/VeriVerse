const checkMisinformation = async (claim, options = {}) => {
    const { useConsensus = 'auto' } = options; // 'auto', true, or false

    const prompt = `Fact-check this claim and assess its credibility.
Provide: verdict (TRUE/FALSE/UNVERIFIED), confidence score (0-1), reasoning, and sources if available.
Format as JSON with keys: verdict, confidence, reasoning, sources (array).

Claim: "${claim}"`;

    const systemPrompt = 'You are a fact-checking AI. Analyze claims objectively, cite reasoning, and provide JSON responses.';

    try {
        // Get available providers
        const providerStatus = getProviderStatus();
        const availableProviders = [];
        if (providerStatus.gemini) availableProviders.push('gemini');
        if (providerStatus.openai) availableProviders.push('openai');
        if (providerStatus.deepseek) availableProviders.push('deepseek');

        console.log(`📊 Available AI providers: ${availableProviders.length}/3 (${availableProviders.join(', ')})`);

        // Smart provider selection
        let shouldUseConsensus = false;
        if (useConsensus === 'auto') {
            // Use consensus only if 2+ providers available
            shouldUseConsensus = availableProviders.length >= 2;
            console.log(`🤖 Smart mode: ${shouldUseConsensus ? 'Consensus' : 'Single provider'} (${availableProviders.length} providers available)`);
        } else {
            shouldUseConsensus = useConsensus && availableProviders.length >= 2;
        }

        // If no providers available, return mock response
        if (availableProviders.length === 0) {
            console.log('⚠️  No AI providers available, returning mock response');
            return getMockMisinformationResponse(claim);
        }

        let response;
        let consensusData = null;

        if (shouldUseConsensus) {
            // Use consensus mode with all available providers
            console.log(`🔄 Using consensus mode with ${availableProviders.length} providers...`);
            const consensus = await callWithConsensus(prompt, {
                systemPrompt,
                temperature: 0.2,
                maxTokens: 500,
                providers: availableProviders,
                minProviders: Math.min(2, availableProviders.length)
            });

            response = consensus.primary;
            consensusData = consensus;
            console.log(`✅ Consensus from ${consensus.count} providers`);
        } else {
            // Use single provider mode (first available)
            const provider = availableProviders[0];
            console.log(`🤖 Using single provider: ${provider.toUpperCase()}`);
            const result = await callAI(prompt, {
                provider,
                systemPrompt,
                temperature: 0.2,
                maxTokens: 500,
                fallback: false // Don't fallback, we handle it ourselves
            });

            response = result.response;
            console.log(`✅ Response from ${provider.toUpperCase()}`);
        }

        // Parse all provider responses if consensus was used
        let providerResults = [];
        if (consensusData && consensusData.all) {
            providerResults = consensusData.all.map(providerData => {
                try {
                    const parsed = JSON.parse(providerData.response);
                    return {
                        provider: providerData.provider,
                        verdict: parsed.verdict || 'UNVERIFIED',
                        confidence: parsed.confidence || 0.75,
                        reasoning: parsed.reasoning || providerData.response
                    };
                } catch {
                    return {
                        provider: providerData.provider,
                        verdict: providerData.response.includes('FALSE') ? 'FALSE' :
                            providerData.response.includes('TRUE') ? 'TRUE' : 'UNVERIFIED',
                        confidence: 0.75,
                        reasoning: providerData.response
                    };
                }
            });
        }

        // Parse primary response
        try {
            const parsed = JSON.parse(response);
            const result = {
                verdict: parsed.verdict || 'UNVERIFIED',
                confidence: parsed.confidence || 0.75,
                analysis: parsed.reasoning || response,
                sources: parsed.sources || [],
                timestamp: new Date().toISOString(),
                mode: shouldUseConsensus ? 'consensus' : 'single-provider',
                providersAvailable: availableProviders.length
            };

            // Add consensus information if available
            if (consensusData) {
                result.consensus = {
                    providersUsed: consensusData.providers,
                    providerCount: consensusData.count,
                    hasConsensus: consensusData.consensus,
                    providerResults: providerResults,
                    agreement: calculateAgreement(providerResults)
                };
            } else {
                // Single provider mode - still show which provider was used
                result.provider = availableProviders[0];
            }

            return result;
        } catch {
            const result = {
                verdict: response.includes('FALSE') ? 'FALSE' : response.includes('TRUE') ? 'TRUE' : 'UNVERIFIED',
                analysis: response,
                confidence: 0.75,
                sources: [],
                timestamp: new Date().toISOString(),
                mode: shouldUseConsensus ? 'consensus' : 'single-provider',
                providersAvailable: availableProviders.length
            };

            if (consensusData) {
                result.consensus = {
                    providersUsed: consensusData.providers,
                    providerCount: consensusData.count,
                    hasConsensus: consensusData.consensus,
                    providerResults: providerResults,
                    agreement: calculateAgreement(providerResults)
                };
            } else {
                result.provider = availableProviders[0];
            }

            return result;
        }
    } catch (error) {
        console.error('Misinformation check error:', error.message);

        // Return mock response as final fallback
        console.log('⚠️  All providers failed, returning mock response');
        return getMockMisinformationResponse(claim);
    }
};

/**
 * Generate mock response when no AI providers are available
 */
const getMockMisinformationResponse = (claim) => {
    // Simple keyword-based mock analysis
    const lowerClaim = claim.toLowerCase();

    // Known false claims
    const falseKeywords = ['flat earth', 'earth is flat', 'vaccines cause autism', 'moon landing fake'];
    const isFalse = falseKeywords.some(keyword => lowerClaim.includes(keyword));

    // Known true facts
    const trueKeywords = ['water boils', 'earth is round', 'gravity', 'sun is hot'];
    const isTrue = trueKeywords.some(keyword => lowerClaim.includes(keyword));

    let verdict = 'UNVERIFIED';
    let confidence = 0.5;
    let analysis = 'Unable to verify this claim. AI providers are currently unavailable.';

    if (isFalse) {
        verdict = 'FALSE';
        confidence = 0.7;
        analysis = 'This claim is commonly known to be false based on scientific consensus. Note: This is a generic response as AI providers are unavailable.';
    } else if (isTrue) {
        verdict = 'TRUE';
        confidence = 0.7;
        analysis = 'This claim appears to be consistent with established scientific facts. Note: This is a generic response as AI providers are unavailable.';
    }

    return {
        verdict,
        confidence,
        analysis,
        sources: [],
        timestamp: new Date().toISOString(),
        mode: 'mock',
        providersAvailable: 0,
        isMockResponse: true
    };
};
