const { callAI, callWithConsensus, getProviderStatus } = require('./aiProviders');

/**
 * Enhanced AI Service with Multi-Provider Support
 * Uses Gemini, OpenAI (ChatGPT), and DeepSeek
 */

/**
 * Analyze content for moderation
 * Primary: OpenAI (best for content moderation)
 * Secondary: Gemini for cross-check
 */
const analyzeContentModeration = async (content, options = {}) => {
    const { useConsensus = 'auto' } = options; // 'auto', true, or false

    const prompt = `Analyze the following content for safety and appropriateness. 

STEP 1: Determine the content type:
- Is this a COMMENT/OPINION (personal thoughts, greetings, casual conversation)?
- Is this a FACTUAL CLAIM/INFORMATION (statement about facts, events, science, history, etc.)?
- Is this PROMOTIONAL/LINK content?

STEP 2: Based on content type, provide appropriate analysis:

FOR COMMENTS/OPINIONS:
- Just provide a brief comment about the content
- Check for safety issues (hate speech, violence, harassment, etc.)
- Decision: APPROVE or REJECT

FOR FACTUAL CLAIMS/INFORMATION:
- VERIFY the correctness of the claim
- Clearly state: "TRUE" if the information is correct
- Clearly state: "FALSE" if the information is incorrect
- Clearly state: "UNVERIFIED" if cannot be verified
- Provide brief explanation of why it's true/false
- Decision: APPROVE (but mention if info is false)

FOR PROMOTIONAL/LINKS:
- Check if links appear legitimate or potentially malicious
- Analyze intent (spam, scam, legitimate promotion)
- Assess trustworthiness and risks
- Decision: APPROVE or REJECT

Provide:
- decision: APPROVE or REJECT
- confidence: score from 0-1
- flags: array of issues (e.g., "false_information", "suspicious_link", "spam", etc.)
- reasoning: Clear explanation that:
  * For factual claims: Starts with "TRUE:", "FALSE:", or "UNVERIFIED:" followed by explanation
  * For comments: Brief comment about the content
  * For links: Legitimacy assessment and overview

Format your response as JSON with keys: decision, confidence, flags (array), reasoning.

Content: "${content}"`;



    const systemPrompt = 'You are a content moderation AI. Analyze content objectively and provide structured JSON responses.';

    try {
        // Get available providers
        const providerStatus = getProviderStatus();
        const availableProviders = [];
        if (providerStatus.gemini) availableProviders.push('gemini');
        if (providerStatus.openai) availableProviders.push('openai');
        if (providerStatus.deepseek) availableProviders.push('deepseek');

        console.log(`📊 Available AI providers for moderation: ${availableProviders.length}/3`);

        // Smart provider selection
        let shouldUseConsensus = false;
        if (useConsensus === 'auto') {
            shouldUseConsensus = availableProviders.length >= 2;
        } else {
            shouldUseConsensus = useConsensus && availableProviders.length >= 2;
        }

        // If no providers available, return mock response
        if (availableProviders.length === 0) {
            console.log('⚠️  No AI providers available for moderation, using keyword-based fallback');
            return getMockModerationResponse(content);
        }

        let response;

        if (shouldUseConsensus) {
            console.log(`🔄 Using consensus mode for moderation with ${availableProviders.length} providers`);
            const consensus = await callWithConsensus(prompt, {
                systemPrompt,
                temperature: 0.3,
                maxTokens: 300,
                providers: availableProviders,
                minProviders: Math.min(2, availableProviders.length)
            });

            response = consensus.primary;
            console.log(`✅ Moderation consensus from ${consensus.count} providers`);
        } else {
            const provider = availableProviders[0];
            console.log(`🤖 Using single provider for moderation: ${provider.toUpperCase()}`);
            const result = await callAI(prompt, {
                provider,
                systemPrompt,
                temperature: 0.3,
                maxTokens: 300,
                fallback: false
            });

            response = result.response;
            console.log(`✅ Moderation response from ${provider.toUpperCase()}`);
        }

        // Parse JSON response
        try {
            const parsed = JSON.parse(response);
            return {
                decision: parsed.decision || 'APPROVE',
                confidence: parsed.confidence || 0.85,
                flags: parsed.flags || [],
                reasoning: parsed.reasoning || response,
                mode: shouldUseConsensus ? 'consensus' : 'single-provider',
                providersAvailable: availableProviders.length
            };
        } catch {
            // If not JSON, create structured response from text
            const decision = response.toLowerCase().includes('reject') ? 'REJECT' : 'APPROVE';
            return {
                decision,
                confidence: 0.85,
                flags: decision === 'REJECT' ? ['flagged_content'] : [],
                reasoning: response,
                mode: shouldUseConsensus ? 'consensus' : 'single-provider',
                providersAvailable: availableProviders.length
            };
        }
    } catch (error) {
        console.error('Content moderation error:', error.message);
        console.log('⚠️  All providers failed for moderation, using keyword-based fallback');
        return getMockModerationResponse(content);
    }
};

/**
 * Generate mock moderation response when no AI providers are available
 */
const getMockModerationResponse = (content) => {
    const lowerContent = content.toLowerCase();

    // Check for links
    const hasLinks = /https?:\/\/|www\./i.test(content);

    // Check for factual claim patterns
    const factualPatterns = [
        /earth is (flat|round|sphere)/i,
        /water boils at/i,
        /vaccines cause/i,
        /climate change/i,
        /covid|coronavirus/i,
        /moon landing/i,
        /gravity/i,
        /sun is/i,
        /\d+\s*(degrees|celsius|fahrenheit)/i,
        /capital of/i,
        /president of/i,
        /discovered|invented/i
    ];
    const isFactualClaim = factualPatterns.some(pattern => pattern.test(content));

    // Check for comment/opinion patterns
    const commentPatterns = [
        /^(hi|hello|hey|good morning|good evening)/i,
        /how are you/i,
        /i think|i believe|in my opinion|i feel/i,
        /^(thanks|thank you|appreciate)/i
    ];
    const isComment = commentPatterns.some(pattern => pattern.test(content));

    // Check for suspicious patterns - but be context-aware
    // Only flag if keywords appear in aggressive/threatening context
    const aggressivePatterns = [
        /i will (kill|attack|harm|hurt)/i,
        /let's (kill|attack|harm|hurt)/i,
        /we should (kill|attack|harm|hurt)/i,
        /going to (kill|attack|harm|hurt)/i,
        /threat of (violence|attack)/i,
        /\b(hate|kill|attack)\s+(you|them|him|her)\b/i
    ];
    const hasAggressiveContent = aggressivePatterns.some(pattern => pattern.test(content));

    const scamKeywords = ['click here', 'limited time', 'act now', 'free money', 'winner', 'claim now', 'urgent', 'verify account'];
    const hasSuspiciousContent = scamKeywords.some(keyword => lowerContent.includes(keyword));

    // Known facts database (simple)
    const knownFacts = {
        true: [
            'earth is round', 'earth is sphere', 'water boils at 100',
            'gravity', 'sun is hot', 'climate change is real'
        ],
        false: [
            'earth is flat', 'vaccines cause autism', 'moon landing fake',
            'moon landing was fake'
        ]
    };

    let decision = 'APPROVE';
    let confidence = 0.70;
    let flags = [];
    let reasoning = '';

    // Handle different content types
    if (isFactualClaim) {
        // This is a factual claim - verify it
        const isTrueFact = knownFacts.true.some(fact => lowerContent.includes(fact));
        const isFalseFact = knownFacts.false.some(fact => lowerContent.includes(fact));

        if (isTrueFact) {
            decision = 'APPROVE';
            confidence = 0.75;
            reasoning = 'TRUE: This information is correct based on established scientific facts.';
        } else if (isFalseFact) {
            decision = 'APPROVE';
            confidence = 0.80;
            flags.push('false_information');
            reasoning = 'FALSE: This claim is incorrect and contradicts established scientific evidence. This is a commonly debunked myth.';
        } else {
            decision = 'APPROVE';
            confidence = 0.60;
            flags.push('unverified_claim');
            reasoning = 'UNVERIFIED: Unable to verify this claim with available information. Users should fact-check this independently.';
        }
    } else if (hasLinks) {
        // Handle links
        if (hasSuspiciousContent) {
            decision = 'REJECT';
            confidence = 0.75;
            flags.push('suspicious_link', 'potential_scam');
            reasoning = `This content contains links with suspicious promotional language. Common scam indicators detected. The message appears to be attempting to lure users to click on potentially malicious links.`;
        } else {
            decision = 'APPROVE';
            confidence = 0.65;
            flags.push('contains_links');
            reasoning = `This content contains links. The message appears to be sharing information or resources. No obvious scam indicators detected, but users should verify link legitimacy before clicking.`;
        }
    } else if (isComment) {
        // Handle comments/opinions
        if (hasAggressiveContent) {
            decision = 'REJECT';
            confidence = 0.70;
            flags.push('potential_harmful_content');
            reasoning = 'This comment contains potentially harmful language. Flagged for review.';
        } else {
            decision = 'APPROVE';
            confidence = 0.75;
            reasoning = 'This appears to be a casual comment or greeting. Content is appropriate.';
        }
    } else {
        // General content - educational/informational content is likely safe
        if (hasAggressiveContent) {
            decision = 'REJECT';
            confidence = 0.70;
            flags.push('potential_harmful_content');
            reasoning = 'Content flagged for potential harmful language based on keyword analysis.';
        } else {
            decision = 'APPROVE';
            confidence = 0.75;
            reasoning = 'Content appears safe. This looks like informational or educational content.';
        }
    }

    return {
        decision,
        confidence,
        flags,
        reasoning,
        mode: 'mock',
        providersAvailable: 0,
        isMockResponse: true
    };
};

/**
 * Analyze smart contract code
 * Primary: DeepSeek (specialized in code)
 * Secondary: ChatGPT, Gemini for verification
 */
const analyzeSmartContract = async (code, options = {}) => {
    const { useConsensus = false } = options;

    const prompt = `Analyze this smart contract code for security vulnerabilities and issues.
Identify: reentrancy, overflow/underflow, access control issues, gas optimization opportunities.
Provide a risk level (LOW, MEDIUM, HIGH), findings array, and recommendations.
Format as JSON with keys: riskLevel, findings (array), recommendations (array), summary.

Contract code: "${code}"`;

    const systemPrompt = 'You are a smart contract security auditor. Provide detailed technical analysis in JSON format.';

    try {
        let response;

        if (useConsensus) {
            // Get consensus from multiple providers
            const consensus = await callWithConsensus(prompt, {
                systemPrompt,
                temperature: 0.2,
                maxTokens: 800,
                providers: ['deepseek', 'openai', 'gemini'],
                minProviders: 2
            });

            response = consensus.primary;
            console.log(`📊 Contract analysis consensus from ${consensus.count} providers`);
        } else {
            // Use DeepSeek as primary (best for code)
            const result = await callAI(prompt, {
                provider: 'deepseek',
                systemPrompt,
                temperature: 0.2,
                maxTokens: 800,
                fallback: true
            });

            response = result.response;
        }

        // Try to parse JSON
        try {
            const parsed = JSON.parse(response);
            return {
                riskLevel: parsed.riskLevel || 'MEDIUM',
                findings: parsed.findings || [],
                recommendations: parsed.recommendations || [],
                analysis: parsed.summary || response,
                timestamp: new Date().toISOString()
            };
        } catch {
            // Fallback to text analysis
            return {
                riskLevel: response.includes('HIGH') ? 'HIGH' : response.includes('MEDIUM') ? 'MEDIUM' : 'LOW',
                analysis: response,
                findings: [],
                recommendations: [],
                timestamp: new Date().toISOString()
            };
        }
    } catch (error) {
        console.error('Contract analysis error:', error.message);
        return {
            riskLevel: 'UNKNOWN',
            analysis: `Error analyzing contract: ${error.message}`,
            findings: [],
            recommendations: [],
            timestamp: new Date().toISOString()
        };
    }
};

/**
 * Assess transaction risk
 * Primary: Gemini (good reasoning)
 * Secondary: OpenAI, DeepSeek
 */
const assessTransactionRisk = async (transaction, options = {}) => {
    const { useConsensus = false } = options;

    const prompt = `Analyze this transaction for potential risks and anomalies.
Consider: amount, destination, patterns, known scam addresses.
Provide risk score (0-100), risk level (LOW/MEDIUM/HIGH), and warnings array.
Format as JSON with keys: riskScore, riskLevel, warnings (array), reasoning.

Transaction: ${JSON.stringify(transaction)}`;

    const systemPrompt = 'You are a blockchain security analyst. Assess transaction risks objectively and provide JSON responses.';

    try {
        let response;

        if (useConsensus) {
            const consensus = await callWithConsensus(prompt, {
                systemPrompt,
                temperature: 0.3,
                maxTokens: 400,
                providers: ['gemini', 'openai'],
                minProviders: 2
            });

            response = consensus.primary;
            console.log(`📊 Risk assessment consensus from ${consensus.count} providers`);
        } else {
            const result = await callAI(prompt, {
                provider: 'gemini',
                systemPrompt,
                temperature: 0.3,
                maxTokens: 400,
                fallback: true
            });

            response = result.response;
        }

        // Parse response
        try {
            const parsed = JSON.parse(response);
            return {
                riskScore: parsed.riskScore || 30,
                riskLevel: parsed.riskLevel || 'MEDIUM',
                warnings: parsed.warnings || [],
                analysis: parsed.reasoning || response,
                timestamp: new Date().toISOString()
            };
        } catch {
            const riskScore = parseInt(response.match(/\d+/)?.[0] || '30');
            return {
                riskScore,
                riskLevel: riskScore > 70 ? 'HIGH' : riskScore > 40 ? 'MEDIUM' : 'LOW',
                analysis: response,
                warnings: [],
                timestamp: new Date().toISOString()
            };
        }
    } catch (error) {
        console.error('Risk assessment error:', error.message);
        return {
            riskScore: 50,
            riskLevel: 'UNKNOWN',
            analysis: `Error assessing risk: ${error.message}`,
            warnings: [],
            timestamp: new Date().toISOString()
        };
    }
};

/**
 * Check for misinformation
 * Primary: Gemini (strong factual knowledge)
 * Secondary: OpenAI for cross-verification
 */
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
            shouldUseConsensus = availableProviders.length >= 2;
            console.log(`🤖 Smart mode: ${shouldUseConsensus ? 'Consensus' : 'Single provider'} (${availableProviders.length} providers)`);
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
            const provider = availableProviders[0];
            console.log(`🤖 Using single provider: ${provider.toUpperCase()}`);
            const result = await callAI(prompt, {
                provider,
                systemPrompt,
                temperature: 0.2,
                maxTokens: 500,
                fallback: false
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
        console.log('⚠️  All providers failed, returning mock response');
        return getMockMisinformationResponse(claim);
    }
};

/**
 * Generate mock response when no AI providers are available
 */
const getMockMisinformationResponse = (claim) => {
    const lowerClaim = claim.toLowerCase();

    const falseKeywords = ['flat earth', 'earth is flat', 'vaccines cause autism', 'moon landing fake'];
    const isFalse = falseKeywords.some(keyword => lowerClaim.includes(keyword));

    const trueKeywords = ['water boils', 'earth is round', 'gravity', 'sun is hot'];
    const isTrue = trueKeywords.some(keyword => lowerClaim.includes(keyword));

    let verdict = 'UNVERIFIED';
    let confidence = 0.5;
    let analysis = 'Unable to verify this claim. AI providers are currently unavailable.';

    if (isFalse) {
        verdict = 'FALSE';
        confidence = 0.7;
        analysis = 'This claim is commonly known to be false. Note: This is a generic response as AI providers are unavailable.';
    } else if (isTrue) {
        verdict = 'TRUE';
        confidence = 0.7;
        analysis = 'This claim appears to be consistent with established facts. Note: This is a generic response as AI providers are unavailable.';
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

/**
 * Calculate agreement percentage between providers
 */
const calculateAgreement = (providerResults) => {
    if (!providerResults || providerResults.length < 2) {
        return 100;
    }

    const verdicts = providerResults.map(r => r.verdict);
    const mostCommon = verdicts.sort((a, b) =>
        verdicts.filter(v => v === a).length - verdicts.filter(v => v === b).length
    ).pop();

    const agreementCount = verdicts.filter(v => v === mostCommon).length;
    return Math.round((agreementCount / verdicts.length) * 100);
};

/**
 * Get AI service status
 */
const getServiceStatus = () => {
    const providerStatus = getProviderStatus();
    return {
        providers: providerStatus,
        isConfigured: providerStatus.activeCount > 0,
        capabilities: {
            moderation: providerStatus.openai || providerStatus.gemini,
            contractAnalysis: providerStatus.deepseek || providerStatus.openai,
            riskAssessment: providerStatus.gemini || providerStatus.openai,
            factChecking: providerStatus.gemini || providerStatus.openai,
            consensus: providerStatus.activeCount >= 2
        }
    };
};

module.exports = {
    analyzeContentModeration,
    analyzeSmartContract,
    assessTransactionRisk,
    checkMisinformation,
    getServiceStatus,
    isConfigured: () => getProviderStatus().activeCount > 0,
    calculateAgreement,
    getMockMisinformationResponse,
    getMockModerationResponse
};
