(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/veri-verse-ui-design/components/hologram-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HologramCard",
    ()=>HologramCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function HologramCard({ children, className, glowColor = "cyan" }) {
    _s();
    const [rotateX, setRotateX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [rotateY, setRotateY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const glowColors = {
        cyan: "shadow-[0_0_30px_var(--neon-cyan)] border-neon-cyan/50",
        purple: "shadow-[0_0_30px_var(--neon-purple)] border-neon-purple/50",
        pink: "shadow-[0_0_30px_var(--neon-pink)] border-neon-pink/50",
        green: "shadow-[0_0_30px_var(--neon-green)] border-neon-green/50"
    };
    const handleMouseMove = (e)=>{
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        setRotateX((y - centerY) / 10);
        setRotateY((centerX - x) / 10);
    };
    const handleMouseLeave = ()=>{
        setRotateX(0);
        setRotateY(0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative rounded-xl border backdrop-blur-xl", "bg-gradient-to-br from-white/10 via-white/5 to-transparent", "transition-all duration-200 ease-out", "hover:scale-[1.02]", glowColors[glowColor], className),
        style: {
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transformStyle: "preserve-3d"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-xl overflow-hidden pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-30",
                    style: {
                        background: `linear-gradient(
              105deg,
              transparent 40%,
              rgba(255, 255, 255, 0.1) 45%,
              rgba(255, 255, 255, 0.2) 50%,
              rgba(255, 255, 255, 0.1) 55%,
              transparent 60%
            )`,
                        backgroundSize: "200% 200%",
                        animation: "hologram-shimmer 3s linear infinite"
                    }
                }, void 0, false, {
                    fileName: "[project]/Downloads/veri-verse-ui-design/components/hologram-card.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/veri-verse-ui-design/components/hologram-card.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/veri-verse-ui-design/components/hologram-card.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(HologramCard, "5ExcaqmQD99Ro8n4zeZ2rtSfQIY=");
_c = HologramCard;
var _c;
__turbopack_context__.k.register(_c, "HologramCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RunAgentPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$components$2f$hologram$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/components/hologram-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const agents = [
    {
        id: "gpt-verify",
        name: "GPT-Verify",
        description: "General purpose verification"
    },
    {
        id: "code-audit",
        name: "Code-Audit",
        description: "Smart contract analysis"
    },
    {
        id: "data-check",
        name: "Data-Check",
        description: "Data integrity validation"
    },
    {
        id: "fact-scan",
        name: "Fact-Scan",
        description: "Factual accuracy checker"
    }
];
function RunAgentPage() {
    _s();
    const [selectedAgent, setSelectedAgent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(agents[0]);
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [output, setOutput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showProofButton, setShowProofButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [proofCreated, setProofCreated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const outputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleRun = async ()=>{
        if (!input.trim()) return;
        setIsRunning(true);
        setOutput("");
        setShowProofButton(false);
        setProofCreated(false);
        // Simulate typewriter output
        const response = `[${selectedAgent.name}] Analysis Complete\n\n` + `Input Hash: 0x${Math.random().toString(16).slice(2, 18)}\n` + `Verification Status: PASSED\n` + `Confidence Score: ${(95 + Math.random() * 5).toFixed(2)}%\n\n` + `--- Detailed Analysis ---\n\n` + `The provided input has been processed through our verification pipeline.\n` + `All integrity checks have passed successfully.\n` + `Cross-reference validation: 3/3 nodes confirmed.\n\n` + `Timestamp: ${new Date().toISOString()}\n` + `Agent ID: ${selectedAgent.id}-${Math.random().toString(36).slice(2, 8)}`;
        for(let i = 0; i <= response.length; i++){
            await new Promise((resolve)=>setTimeout(resolve, 15));
            setOutput(response.slice(0, i));
        }
        setIsRunning(false);
        setShowProofButton(true);
    };
    const handleCreateProof = ()=>{
        setProofCreated(true);
    };
    const handleCopy = ()=>{
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "neon-text-cyan",
                                    children: "Run"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                " Agent"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "Execute AI verification tasks and generate blockchain proofs"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$components$2f$hologram$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HologramCard"], {
                    className: "p-6 mb-6",
                    glowColor: "cyan",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm text-muted-foreground mb-2",
                            children: "Select Agent"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsDropdownOpen(!isDropdownOpen),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full p-4 rounded-lg text-left transition-all duration-300", "bg-background/50 border border-neon-cyan/30", "hover:border-neon-cyan hover:shadow-[0_0_15px_var(--neon-cyan)]", "flex items-center justify-between", isDropdownOpen && "border-neon-cyan shadow-[0_0_15px_var(--neon-cyan)]"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold text-neon-cyan",
                                                    children: selectedAgent.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: selectedAgent.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 text-neon-cyan transition-transform duration-300", isDropdownOpen && "rotate-180")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                isDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-full left-0 right-0 mt-2 rounded-lg border border-neon-cyan/30 bg-background/95 backdrop-blur-xl overflow-hidden z-20 shadow-[0_0_30px_var(--neon-cyan)]",
                                    children: agents.map((agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSelectedAgent(agent);
                                                setIsDropdownOpen(false);
                                            },
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full p-4 text-left transition-all duration-200", "hover:bg-neon-cyan/10", selectedAgent.id === agent.id && "bg-neon-cyan/20"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold",
                                                    children: agent.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: agent.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, agent.id, true, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$components$2f$hologram$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HologramCard"], {
                    className: "p-6 mb-6",
                    glowColor: "purple",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm text-muted-foreground mb-2",
                            children: "Input Data"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    placeholder: "Enter data to verify...",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-40 p-4 rounded-lg resize-none", "bg-background/50 border border-neon-purple/30", "focus:border-neon-purple focus:shadow-[0_0_15px_var(--neon-purple)]", "focus:outline-none transition-all duration-300", "placeholder:text-muted-foreground/50")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-2 right-2 text-xs text-muted-foreground",
                                    children: [
                                        input.length,
                                        " characters"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleRun,
                        disabled: isRunning || !input.trim(),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative px-12 py-4 rounded-xl font-bold uppercase tracking-wider", "bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20", "border-2 border-neon-cyan", "shadow-[0_0_30px_var(--neon-cyan)]", "hover:shadow-[0_0_50px_var(--neon-cyan),0_0_80px_var(--neon-purple)]", "transition-all duration-300", "disabled:opacity-50 disabled:cursor-not-allowed", "group overflow-hidden"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5", isRunning && "animate-pulse")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this),
                                    isRunning ? "Processing..." : "Run Agent"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 rounded-full bg-neon-cyan", isRunning && "animate-ping")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                (output || isRunning) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$components$2f$hologram$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HologramCard"], {
                    className: "p-6 mb-6",
                    glowColor: "green",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full bg-red-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full bg-yellow-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full bg-green-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 text-sm text-muted-foreground",
                                            children: "Terminal Output"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this),
                                output && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCopy,
                                    className: "p-2 hover:bg-neon-cyan/10 rounded transition-colors",
                                    children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-4 h-4 text-neon-green"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "w-4 h-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: outputRef,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-mono text-sm p-4 rounded-lg min-h-[200px]", "bg-black/50 border border-neon-green/30", "overflow-auto"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "text-neon-green whitespace-pre-wrap",
                                children: [
                                    output,
                                    isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "animate-pulse",
                                        children: "▌"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                lineNumber: 202,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                    lineNumber: 176,
                    columnNumber: 11
                }, this),
                showProofButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCreateProof,
                        disabled: proofCreated,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative px-8 py-4 rounded-xl font-bold uppercase tracking-wider", "bg-gradient-to-r from-neon-green/20 to-neon-cyan/20", "border-2 border-neon-green", "shadow-[0_0_20px_var(--neon-green)]", "hover:shadow-[0_0_40px_var(--neon-green)]", "transition-all duration-300", "overflow-hidden group", proofCreated && "bg-neon-green/30"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "absolute inset-0 w-full h-full pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0,25 Q50,10 100,25 T200,25",
                                    fill: "none",
                                    stroke: "var(--neon-green)",
                                    strokeWidth: "1",
                                    strokeDasharray: "200",
                                    className: "animate-[circuit-trace_2s_linear_infinite]",
                                    style: {
                                        opacity: 0.5
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                lineNumber: 228,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10",
                                children: proofCreated ? "✓ Proof Created" : "Create Blockchain Proof"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                        lineNumber: 213,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                    lineNumber: 212,
                    columnNumber: 11
                }, this),
                proofCreated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$components$2f$hologram$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HologramCard"], {
                    className: "mt-6 p-6",
                    glowColor: "green",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 mx-auto mb-4 rounded-full bg-neon-green/20 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "w-8 h-8 text-neon-green"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                lineNumber: 247,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold neon-text-green mb-2",
                                children: "Proof Successfully Created"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                lineNumber: 250,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-4",
                                children: "Your verification has been recorded on the blockchain"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                lineNumber: 251,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-mono text-sm bg-black/30 p-3 rounded-lg break-all",
                                children: [
                                    "IPFS CID: Qm",
                                    Math.random().toString(36).slice(2, 20),
                                    "..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                                lineNumber: 252,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                        lineNumber: 246,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
                    lineNumber: 245,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/run/page.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(RunAgentPage, "FBDvy7mRVriJv9WUk/zbN4UR+TA=");
_c = RunAgentPage;
var _c;
__turbopack_context__.k.register(_c, "RunAgentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronDown", [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
"[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Zap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Zap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Zap", [
    [
        "path",
        {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }
    ]
]);
;
 //# sourceMappingURL=zap.js.map
}),
"[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Zap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)");
}),
"[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Copy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Copy", [
    [
        "rect",
        {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }
    ],
    [
        "path",
        {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }
    ]
]);
;
 //# sourceMappingURL=copy.js.map
}),
"[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Copy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript)");
}),
"[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Check
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Check", [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
]);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Downloads_veri-verse-ui-design_23f7b536._.js.map