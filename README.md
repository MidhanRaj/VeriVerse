# VeriVerse 🔍

**AI-Powered Content Verification Platform with Multi-Provider Consensus**

VeriVerse is an advanced content verification system that uses multiple AI providers (Gemini, ChatGPT, DeepSeek) to analyze content for truthfulness, safety, and legitimacy through intelligent consensus mechanisms.

---

## ✨ Features

### 🤖 Multi-Provider AI Consensus
- **Smart Provider Selection**: Automatically uses consensus mode with 2+ providers, single provider with 1, or intelligent mock fallback with 0
- **Supported Providers**: Google Gemini, OpenAI (ChatGPT), DeepSeek
- **Automatic Fallback**: Graceful degradation if providers fail

### 🎯 Intelligent Content Analysis
- **Fact-Checking**: Verifies factual claims with clear TRUE/FALSE/UNVERIFIED labels
- **Comment Detection**: Recognizes casual comments vs factual claims
- **Link Analysis**: Detects suspicious links, phishing attempts, and scams
- **Context-Aware**: Understands educational content vs actual threats

### 🛡️ Content Moderation
- **Safety Analysis**: Detects hate speech, violence, harassment
- **Scam Detection**: Identifies promotional spam and malicious content
- **Educational Content Support**: Won't flag historical/educational content

### 📊 Agent System
- **Moderation Agent**: Content safety and appropriateness
- **Misinformation Agent**: Fact-checking and claim verification
- **Contract Agent**: Smart contract security analysis
- **Risk Agent**: Transaction risk assessment

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and npm
- **Git**
- At least one AI provider API key (Gemini recommended - has free tier)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MidhanRaj/VeriVerse.git
   cd VeriVerse
   ```

2. **Install frontend dependencies**
   ```bash
   cd veri-verse-ui-design
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Configure environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```bash
   cd backend
   cp .env.example .env
   ```
   
   Or create manually with this content:
   ```env
   # AI Service Configuration
   GEMINI_API_KEY=your_gemini_api_key_here
   OPENAI_API_KEY=your_openai_api_key_here
   DEEPSEEK_API_KEY=your_deepseek_api_key_here

   # BlockDAG Blockchain Configuration
   BLOCKDAG_RPC_URL=https://rpc.awakening.bdagscan.com
   PRIVATE_KEY=your_private_key_here
   CONTRACT_ADDRESS=

   # IPFS Storage Configuration
   WEB3_STORAGE_TOKEN=your_web3_storage_token_here

   # Server Configuration
   PORT=3001
   ```

5. **Get API Keys** (at least one required)

   **Option 1: Google Gemini (Recommended - Free Tier)**
   - Visit: https://makersuite.google.com/app/apikey
   - Sign in with Google account
   - Click "Create API Key"
   - Copy and paste into `GEMINI_API_KEY`

   **Option 2: OpenAI (Paid)**
   - Visit: https://platform.openai.com/api-keys
   - Create account and add payment method
   - Generate API key
   - Copy and paste into `OPENAI_API_KEY`

   **Option 3: DeepSeek (Paid)**
   - Visit: https://platform.deepseek.com/
   - Create account and add credits
   - Generate API key
   - Copy and paste into `DEEPSEEK_API_KEY`

6. **Start the application**

   **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm run dev
   ```
   Backend will start on http://localhost:3001

   **Terminal 2 - Frontend:**
   ```bash
   cd veri-verse-ui-design
   npm run dev
   ```
   Frontend will start on http://localhost:3000

7. **Open the application**
   
   Navigate to http://localhost:3000 in your browser

---

## 📖 Usage Guide

### Testing Content Verification

1. **Navigate to "Run Agent"** page
2. **Select an agent**:
   - **Moderation Agent**: For content safety analysis
   - **Misinformation Agent**: For fact-checking

3. **Enter content** to analyze:
   - **Comments**: "Hello, how are you?"
   - **Facts**: "The Earth is round"
   - **False Claims**: "The Earth is flat"
   - **Links**: "Check this out: https://example.com"

### Example Responses

**Factual Claim (True):**
```
Input: "Water boils at 100°C at sea level"
Response: TRUE: This information is correct based on established scientific facts.
```

**Factual Claim (False):**
```
Input: "The Earth is flat"
Response: FALSE: This claim is incorrect and contradicts established scientific evidence.
Flags: false_information
```

**Suspicious Link:**
```
Input: "URGENT! Click here NOW to claim FREE MONEY"
Response: This content contains links with suspicious promotional language.
Flags: suspicious_link, potential_scam
Decision: REJECT
```

---

## 🏗️ Project Structure

```
VeriVerse/
├── veri-verse-ui-design/          # Frontend (Next.js)
│   ├── app/                       # Next.js app directory
│   ├── components/                # React components
│   ├── lib/                       # Utilities and API client
│   └── public/                    # Static assets
│
└── backend/                       # Backend (Node.js/Express)
    ├── agents/                    # AI agent implementations
    │   ├── moderationAgent.js     # Content moderation
    │   ├── misinfoAgent.js        # Fact-checking
    │   ├── contractAgent.js       # Smart contract analysis
    │   └── riskAgent.js           # Risk assessment
    │
    ├── services/                  # Core services
    │   ├── aiProviders.js         # Multi-provider AI integration
    │   ├── aiService.js           # AI service layer
    │   └── crossCheck.js          # Cross-verification
    │
    ├── controllers/               # API controllers
    ├── routes/                    # API routes
    └── storage/                   # Data persistence
```

---

## 🔧 Configuration

### AI Provider Modes

The system automatically selects the best mode based on available providers:

- **Consensus Mode** (2+ providers): Uses multiple AI providers for maximum accuracy
- **Single Provider Mode** (1 provider): Uses the available provider
- **Mock Mode** (0 providers): Intelligent keyword-based fallback

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Optional* | Google Gemini API key |
| `OPENAI_API_KEY` | Optional* | OpenAI API key |
| `DEEPSEEK_API_KEY` | Optional* | DeepSeek API key |
| `PORT` | No | Backend port (default: 3001) |
| `BLOCKDAG_RPC_URL` | No | BlockDAG RPC endpoint |
| `PRIVATE_KEY` | No | Wallet private key for blockchain |
| `CONTRACT_ADDRESS` | No | Deployed contract address |
| `WEB3_STORAGE_TOKEN` | No | IPFS storage token |

*At least one AI provider API key is required for real AI analysis. Without any keys, the system uses intelligent mock responses.

---

## 🧪 Testing

### Run Backend Tests

```bash
cd backend

# Test AI providers
node test-ai-providers.js

# Test moderation
node test-moderation.js

# Test consensus
node test-consensus.js

# Test intelligent analysis
node test-intelligent-moderation.js
```

---

## 🛠️ Development

### Tech Stack

**Frontend:**
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

**Backend:**
- Node.js
- Express
- Google Generative AI SDK
- OpenAI SDK
- Axios (for DeepSeek)

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/run-agent` | POST | Run an AI agent |
| `/api/analyze-truthfulness` | POST | Analyze content truthfulness |
| `/api/consensus-details` | POST | Get detailed consensus breakdown |
| `/api/cross-check` | POST | Cross-verify with multiple providers |

---

## 🚨 Troubleshooting

### "AI providers unavailable" message

**Cause**: No valid API keys configured or all providers have billing issues

**Solution**:
1. Check `.env` file has at least one valid API key
2. Verify API key has billing/credits enabled
3. Restart backend server after updating `.env`

### Gemini 404 Error

**Cause**: Using deprecated model name

**Solution**: Already fixed in code (uses `gemini-1.5-flash`)

### OpenAI Quota Exceeded

**Cause**: No credits or exceeded free tier

**Solution**: Add payment method at https://platform.openai.com/account/billing

### Port Already in Use

**Solution**:
```bash
# Kill process on port 3000 (frontend)
npx kill-port 3000

# Kill process on port 3001 (backend)
npx kill-port 3001
```

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📧 Support

For issues and questions, please open an issue on GitHub.

---

## 🌟 Acknowledgments

- Google Gemini AI
- OpenAI
- DeepSeek
- Next.js Team
- Express.js Team

---

**Built with ❤️ for content verification and truth in the digital age**
