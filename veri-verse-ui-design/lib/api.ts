const API_BASE = "http://localhost:3001/api";

export const runAgent = async (inputText: string, agentType: string) => {
    try {
        const response = await fetch(`${API_BASE}/run-agent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ agentId: agentType, input: inputText }),
        });
        if (!response.ok) throw new Error("Failed to run agent");
        return await response.json();
    } catch (error) {
        console.error("runAgent error:", error);
        throw error;
    }
};

export const createProof = async (proofId: string, agentId: string, ipfsHash: string) => {
    try {
        const response = await fetch(`${API_BASE}/create-proof`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ proofId, agentId, ipfsHash }),
        });
        if (!response.ok) throw new Error("Failed to create proof");
        return await response.json();
    } catch (error) {
        console.error("createProof error:", error);
        throw error;
    }
};

export const verifyProof = async (proofId: string) => {
    try {
        const response = await fetch(`${API_BASE}/verify-proof`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ proofId }),
        });
        if (!response.ok) throw new Error("Failed to verify proof");
        return await response.json();
    } catch (error) {
        console.error("verifyProof error:", error);
        throw error;
    }
};

export const crossCheck = async (agentId: string, inputText: string, originalOutput: any) => {
    try {
        const response = await fetch(`${API_BASE}/cross-check`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ agentId, input: inputText, originalOutput }),
        });
        if (!response.ok) throw new Error("Failed to cross-check");
        return await response.json();
    } catch (error) {
        console.error("crossCheck error:", error);
        throw error;
    }
};

export const createDispute = async (proofId: string, explanation: string) => {
    try {
        const response = await fetch(`${API_BASE}/create-dispute`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ proofId, explanation }),
        });
        if (!response.ok) throw new Error("Failed to create dispute");
        return await response.json();
    } catch (error) {
        console.error("createDispute error:", error);
        throw error;
    }
};

export const runWorkflow = async (workflowId: string, input: any) => {
    try {
        const response = await fetch(`${API_BASE}/workflow/run`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ workflowId, input }),
        });
        if (!response.ok) throw new Error("Failed to run workflow");
        return await response.json();
    } catch (error) {
        console.error("runWorkflow error:", error);
        throw error;
    }
};
