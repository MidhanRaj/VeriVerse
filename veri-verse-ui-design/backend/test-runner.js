const fetch = require('node-fetch'); // You might need to install this if node version is old, but let's assume node 18+ or use http
// Actually, to be safe with "no missing dependencies", I'll use standard http or just assume fetch exists in recent node.
// Or I can use a simple helper with http module. Let's use http module to be safe.

const http = require('http');

const post = (path, data) => {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 3001,
            path: '/api' + path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(body));
                } catch (e) {
                    resolve(body);
                }
            });
        });

        req.on('error', (e) => reject(e));
        req.write(JSON.stringify(data));
        req.end();
    });
};

const get = (path) => {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 3001,
            path: '/api' + path,
            method: 'GET',
        };

        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(body));
                } catch (e) {
                    resolve(body);
                }
            });
        });

        req.on('error', (e) => reject(e));
        req.end();
    });
};

const runTests = async () => {
    console.log('Starting Tests...');

    try {
        // 1. Run Moderation Agent
        console.log('\n1. Testing /run-agent (Moderation)...');
        const modResult = await post('/run-agent', {
            agentId: 'moderation-agent',
            input: 'This is a safe message.'
        });
        console.log('Result:', modResult.success ? 'PASS' : 'FAIL', modResult.data ? modResult.data.output.decision : modResult);

        // 2. Save to IPFS
        console.log('\n2. Testing /save-to-ipfs...');
        const ipfsResult = await post('/save-to-ipfs', { test: 'data' });
        console.log('Result:', ipfsResult.cid ? 'PASS' : 'FAIL', ipfsResult);

        // 3. Create Proof
        console.log('\n3. Testing /create-proof...');
        const proofId = 'proof-' + Date.now();
        const proofResult = await post('/create-proof', {
            proofId: proofId,
            agentId: 'moderation-agent',
            ipfsHash: ipfsResult.cid || 'QmTest'
        });
        console.log('Result:', proofResult.success ? 'PASS' : 'FAIL', proofResult);

        // 4. Verify Proof
        console.log('\n4. Testing /verify-proof...');
        const verifyResult = await post('/verify-proof', { proofId });
        console.log('Result:', verifyResult.isValid ? 'PASS' : 'FAIL', verifyResult);

        // 5. Cross Check
        console.log('\n5. Testing /cross-check...');
        const crossCheckResult = await post('/cross-check', {
            agentId: 'moderation-agent',
            input: 'Check this',
            originalOutput: { decision: 'APPROVE' }
        });
        console.log('Result:', crossCheckResult.consensus ? 'PASS' : 'FAIL', crossCheckResult.consensus);

        // 6. Create Dispute
        console.log('\n6. Testing /create-dispute...');
        const disputeResult = await post('/create-dispute', {
            proofId: proofId,
            explanation: 'I disagree with this result'
        });
        console.log('Result:', disputeResult.success ? 'PASS' : 'FAIL', disputeResult);

        console.log('\nAll tests completed.');

    } catch (error) {
        console.error('Test failed:', error);
    }
};

// Wait for server to start
setTimeout(runTests, 2000);
