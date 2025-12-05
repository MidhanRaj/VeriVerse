const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'db.json');

// Initialize DB if not exists
if (!fs.existsSync(DB_FILE)) {
    const initialData = {
        agents: [
            { id: 'moderation-agent', name: 'Moderation Agent', score: 50, runs: 0 },
            { id: 'contract-agent', name: 'Contract Summary Agent', score: 50, runs: 0 },
            { id: 'risk-agent', name: 'Transaction Risk Agent', score: 50, runs: 0 },
            { id: 'misinfo-agent', name: 'Misinformation Checker', score: 50, runs: 0 }
        ],
        proofs: [],
        disputes: [],
        workflows: []
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
}

const readDB = () => {
    const data = fs.readFileSync(DB_FILE);
    return JSON.parse(data);
};

const writeDB = (data) => {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

module.exports = {
    readDB,
    writeDB
};
