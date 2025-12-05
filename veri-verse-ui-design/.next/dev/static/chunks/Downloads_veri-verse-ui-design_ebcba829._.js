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
        green: "shadow-[0_0_30px_var(--neon-green)] border-neon-green/50",
        red: "shadow-[0_0_30px_rgba(239,68,68,0.8)] border-red-500/50"
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
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/veri-verse-ui-design/components/hologram-card.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/veri-verse-ui-design/components/hologram-card.tsx",
        lineNumber: 45,
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
"[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AgentProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$components$2f$hologram$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/components/hologram-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const mockAgent = {
    name: "GPT-Verify Prime",
    id: "agent-gpt-001",
    avatar: "V",
    reputation: 94,
    totalRuns: 15847,
    successRate: 99.2,
    tags: [
        "General Purpose",
        "High Accuracy",
        "Fast Response",
        "Blockchain Verified"
    ],
    timeline: [
        {
            type: "run",
            title: "Verification Run #15847",
            time: "2 minutes ago",
            status: "success"
        },
        {
            type: "proof",
            title: "Blockchain Proof Created",
            time: "5 minutes ago",
            status: "success"
        },
        {
            type: "crosscheck",
            title: "Cross-Check Completed",
            time: "12 minutes ago",
            status: "success"
        },
        {
            type: "dispute",
            title: "Dispute Resolved",
            time: "1 hour ago",
            status: "resolved"
        },
        {
            type: "run",
            title: "Verification Run #15846",
            time: "2 hours ago",
            status: "success"
        },
        {
            type: "proof",
            title: "Blockchain Proof Created",
            time: "3 hours ago",
            status: "success"
        }
    ]
};
function AgentProfilePage() {
    _s();
    const [selectedTimelineItem, setSelectedTimelineItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "neon-text-cyan",
                                    children: "Agent"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                " Profile"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "Holographic identity card and activity timeline"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$components$2f$hologram$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HologramCard"], {
                            className: "p-8 float-animation",
                            glowColor: "cyan",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-xl hologram-shimmer pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-32 h-32 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-5xl font-bold shadow-[0_0_40px_var(--neon-cyan)]",
                                                    children: mockAgent.avatar
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "absolute inset-0 w-full h-full -rotate-90",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "64",
                                                        cy: "64",
                                                        r: "60",
                                                        fill: "none",
                                                        stroke: "var(--neon-cyan)",
                                                        strokeWidth: "2",
                                                        strokeDasharray: `${mockAgent.reputation * 3.77} 377`,
                                                        className: "drop-shadow-[0_0_10px_var(--neon-cyan)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-neon-green/20 border border-neon-green text-neon-green text-xs font-bold",
                                                    children: [
                                                        mockAgent.reputation,
                                                        "% REP"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold neon-text-cyan mb-1",
                                                children: mockAgent.name
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-sm text-muted-foreground",
                                                children: mockAgent.id
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center p-3 rounded-lg bg-black/30 border border-neon-purple/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold neon-text-purple",
                                                        children: mockAgent.totalRuns.toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Total Runs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center p-3 rounded-lg bg-black/30 border border-neon-green/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold neon-text-green",
                                                        children: [
                                                            mockAgent.successRate,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Success Rate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 justify-center",
                                        children: mockAgent.tags.map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1 rounded-full text-xs font-medium", "bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan", "animate-in fade-in duration-500"),
                                                style: {
                                                    animationDelay: `${i * 100}ms`
                                                },
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$components$2f$hologram$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HologramCard"], {
                            className: "p-6",
                            glowColor: "purple",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold mb-6 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-5 h-5 text-neon-purple"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        "Activity Timeline"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: mockAgent.timeline.map((item, i)=>{
                                                const icons = {
                                                    run: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
                                                    proof: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                                                    crosscheck: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"],
                                                    dispute: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"]
                                                };
                                                const Icon = icons[item.type];
                                                const colors = {
                                                    run: "text-neon-cyan border-neon-cyan/50",
                                                    proof: "text-neon-green border-neon-green/50",
                                                    crosscheck: "text-neon-purple border-neon-purple/50",
                                                    dispute: "text-neon-pink border-neon-pink/50"
                                                };
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex gap-4 p-3 rounded-lg transition-all duration-300 cursor-pointer", "hover:bg-white/5", selectedTimelineItem === i && "bg-white/10"),
                                                    onClick: ()=>setSelectedTimelineItem(selectedTimelineItem === i ? null : i),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-10 h-10 rounded-full border-2 flex items-center justify-center", "bg-background/80 z-10", colors[item.type], "transition-all duration-300", selectedTimelineItem === i && "scale-110 shadow-[0_0_15px_currentColor]"),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: item.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1 rounded text-xs font-medium", item.status === "success" && "bg-neon-green/20 text-neon-green", item.status === "resolved" && "bg-neon-purple/20 text-neon-purple"),
                                                            children: item.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-8",
                    children: [
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                            label: "Proofs Created",
                            value: "2,847",
                            color: "cyan"
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"],
                            label: "Cross-Checks",
                            value: "1,293",
                            color: "purple"
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                            label: "Disputes Won",
                            value: "47/52",
                            color: "pink"
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
                            label: "User Rating",
                            value: "4.9/5",
                            color: "green"
                        }
                    ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$components$2f$hologram$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HologramCard"], {
                            className: "p-4 text-center",
                            glowColor: stat.color,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                    className: `w-6 h-6 mx-auto mb-2 neon-text-${stat.color}`
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `text-2xl font-bold neon-text-${stat.color}`,
                                    children: stat.value
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-muted-foreground",
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, stat.label, true, {
                            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/veri-verse-ui-design/app/app/profile/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(AgentProfilePage, "DLjv+v5uP3UQ24N0N3hVyi5R9ck=");
_c = AgentProfilePage;
var _c;
__turbopack_context__.k.register(_c, "AgentProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Star
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Star", [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
]);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Star",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)");
}),
"[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Clock", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }
    ]
]);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
"[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleCheckBig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CircleCheckBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CircleCheckBig", [
    [
        "path",
        {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
]);
;
 //# sourceMappingURL=circle-check-big.js.map
}),
"[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Downloads_veri-verse-ui-design_ebcba829._.js.map