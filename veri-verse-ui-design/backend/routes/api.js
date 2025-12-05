const express = require('express');
const router = express.Router();

const {
    runAgentController,
    getAgentController,
    crossCheckController
} = require('../controllers/agentController');

const {
    createProofController,
    verifyProofController,
    getProofController,
    saveToIpfsController
} = require('../controllers/proofController');

const {
    createDisputeController,
    getDisputesController,
    getDisputeController
} = require('../controllers/disputeController');

const {
    saveWorkflowController,
    runWorkflowController
} = require('../controllers/workflowController');

const {
    analyzeTruthfulness,
    getConsensusDetails
} = require('../controllers/consensusController');

// Agent Routes
router.post('/run-agent', runAgentController);
router.get('/agent/:id', getAgentController);
router.post('/cross-check', crossCheckController);

// Consensus Analysis Routes
router.post('/analyze-truthfulness', analyzeTruthfulness);
router.post('/consensus-details', getConsensusDetails);

// Proof & IPFS Routes
router.post('/save-to-ipfs', saveToIpfsController);
router.post('/create-proof', createProofController);
router.post('/verify-proof', verifyProofController);
router.get('/proof/:id', getProofController);

// Dispute Routes
router.post('/create-dispute', createDisputeController);
router.get('/disputes', getDisputesController);
router.get('/dispute/:id', getDisputeController);

// Workflow Routes
router.post('/workflow/save', saveWorkflowController);
router.post('/workflow/run', runWorkflowController);

module.exports = router;
