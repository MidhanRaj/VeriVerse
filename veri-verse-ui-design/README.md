# VeriVerse - The Global Trust Layer for AI Agents

VeriVerse is a decentralized platform designed to verify AI agent outputs, ensuring trust and transparency in the age of autonomous AI. By combining multi-provider AI consensus with blockchain immutability, VeriVerse provides a robust framework for validating content, smart contracts, and transactions.

![VeriVerse Homepage](https://via.placeholder.com/800x400?text=VeriVerse+Platform)

## 🌟 Key Features

- **Multi-Agent Verification**: Uses consensus from OpenAI, Google Gemini, and DeepSeek to validate outputs.
- **Blockchain Immutability**: Stores verification proofs on the BlockDAG Awakening Network for tamper-proof records.
- **Decentralized Storage**: Utilizes IPFS (via Web3.Storage) to store detailed verification data.
- **Specialized Agents**:
  - 🛡️ **Moderation Agent**: Analyzes content for safety and policy compliance.
  - 📜 **Contract Agent**: Audits smart contracts for security vulnerabilities.
  - ⚖️ **Risk Agent**: Assesses transaction risks and detects anomalies.
  - 🕵️ **Misinformation Agent**: Fact-checks claims against reliable sources.
- **Dispute Resolution**: Decentralized mechanism for challenging and resolving verification disputes.

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS 4, Radix UI
- **Language**: TypeScript
- **State**: React Hooks

### Backend
- **Server**: Node.js with Express
- **AI Integration**: OpenAI API, Google Gemini API, DeepSeek API
- **Blockchain**: Ethers.js, BlockDAG Network
- **Storage**: Web3.Storage (IPFS), LowDB (Local JSON DB)

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or pnpm
- Git

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/veri-verse.git
   cd veri-verse
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

## ⚙️ Configuration

### Backend Setup
1. Navigate to the `backend` directory.
2. Create a `.env` file (or edit the existing one) with the following keys:

   ```env
   # AI Service Configuration
   OPENAI_API_KEY=your_openai_key
   GEMINI_API_KEY=your_gemini_key
   DEEPSEEK_API_KEY=your_deepseek_key

   # Blockchain Configuration
   BLOCKDAG_RPC_URL=https://rpc.awakening.bdagscan.com
   PRIVATE_KEY=your_wallet_private_key
   CONTRACT_ADDRESS=your_deployed_contract_address

   # Storage Configuration
   WEB3_STORAGE_TOKEN=your_web3_storage_token

   # Server Configuration
   PORT=3001
   ```

> **Note**: The system includes fallback mechanisms. If API keys are missing, it will use simulated data or keyword-based analysis.

## 🏃‍♂️ Running the Application

You need to run both the frontend and backend servers.

### 1. Start the Backend
Open a terminal and run:
```bash
cd backend
npm start
# Or for development:
npm run dev
```
*Server runs on http://localhost:3001*

### 2. Start the Frontend
Open a new terminal window and run:
```bash
npm run dev
```
*Frontend runs on http://localhost:3000*

### 3. Access the App
Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## 🧪 Testing

- **Run Agent**: Go to the "Run Agent" page to test different AI verification tasks.
- **Proof Viewer**: Check the "Proof Viewer" to see stored verification proofs.
- **Cross-Checks**: Use the "Cross-Checks" feature to compare results from different AI models.

## 📄 API Documentation

The backend exposes the following REST endpoints:

- `POST /api/run-agent`: Execute a specific AI agent.
- `POST /api/cross-check`: Run verification across multiple models.
- `POST /api/create-proof`: Store a verification proof on the blockchain.
- `GET /api/proof/:id`: Retrieve a proof by ID.
- `POST /api/save-to-ipfs`: Save data to decentralized storage.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
