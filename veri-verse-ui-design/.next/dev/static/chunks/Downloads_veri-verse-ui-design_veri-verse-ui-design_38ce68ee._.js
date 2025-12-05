(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/components/hologram-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HologramCard",
    ()=>HologramCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function HologramCard({ children, className, glowColor = "cyan" }) {
    _s();
    const [rotateX, setRotateX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [rotateY, setRotateY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative rounded-xl border backdrop-blur-xl", "bg-gradient-to-br from-white/10 via-white/5 to-transparent", "transition-all duration-200 ease-out", "hover:scale-[1.02]", glowColors[glowColor], className),
        style: {
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transformStyle: "preserve-3d"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-xl overflow-hidden pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/components/hologram-card.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/components/hologram-card.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/components/hologram-card.tsx",
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
"[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CrossChecksPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$components$2f$hologram$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/components/hologram-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const crossChecks = [
    {
        id: "CC-001",
        input: "Financial report Q4 2024 summary",
        mainAgent: "GPT-Verify",
        validators: [
            {
                name: "Validator-A",
                status: "verified",
                confidence: 97
            },
            {
                name: "Validator-B",
                status: "verified",
                confidence: 94
            },
            {
                name: "Validator-C",
                status: "verified",
                confidence: 96
            }
        ],
        consensus: "verified",
        timestamp: "5 minutes ago"
    },
    {
        id: "CC-002",
        input: "Smart contract audit request",
        mainAgent: "Code-Audit",
        validators: [
            {
                name: "Validator-A",
                status: "verified",
                confidence: 89
            },
            {
                name: "Validator-B",
                status: "pending",
                confidence: null
            },
            {
                name: "Validator-C",
                status: "failed",
                confidence: 45
            }
        ],
        consensus: "pending",
        timestamp: "12 minutes ago"
    },
    {
        id: "CC-003",
        input: "Medical data verification",
        mainAgent: "Medical-Check",
        validators: [
            {
                name: "Validator-A",
                status: "verified",
                confidence: 99
            },
            {
                name: "Validator-B",
                status: "verified",
                confidence: 98
            },
            {
                name: "Validator-C",
                status: "verified",
                confidence: 97
            }
        ],
        consensus: "verified",
        timestamp: "1 hour ago"
    }
];
function CrossChecksPage() {
    _s();
    const [selectedCheck, setSelectedCheck] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const getStatusIcon = (status)=>{
        switch(status){
            case "verified":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "w-4 h-4 text-neon-green"
                }, void 0, false, {
                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                    lineNumber: 53,
                    columnNumber: 16
                }, this);
            case "failed":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                    className: "w-4 h-4 text-neon-pink"
                }, void 0, false, {
                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                    lineNumber: 55,
                    columnNumber: 16
                }, this);
            case "pending":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "w-4 h-4 text-yellow-500 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                    lineNumber: 57,
                    columnNumber: 16
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "neon-text-cyan",
                                    children: "Cross"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                "-Checks"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "Multi-agent verification consensus tracking"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: crossChecks.map((check)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$components$2f$hologram$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HologramCard"], {
                            className: "p-6",
                            glowColor: check.consensus === "verified" ? "green" : check.consensus === "pending" ? "cyan" : "pink",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                                                            className: "w-5 h-5 text-neon-purple"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-sm text-muted-foreground",
                                                            children: check.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold",
                                                    children: check.input
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: [
                                                        "Main Agent: ",
                                                        check.mainAgent
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1 rounded-full text-sm font-medium", check.consensus === "verified" && "bg-neon-green/20 text-neon-green border border-neon-green/50", check.consensus === "pending" && "bg-yellow-500/20 text-yellow-500 border border-yellow-500/50", check.consensus === "failed" && "bg-neon-pink/20 text-neon-pink border border-neon-pink/50"),
                                                    children: check.consensus.toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mt-1",
                                                    children: check.timestamp
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-4",
                                    children: check.validators.map((validator, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-lg border transition-all duration-300", validator.status === "verified" && "border-neon-green/30 bg-neon-green/5", validator.status === "pending" && "border-yellow-500/30 bg-yellow-500/5", validator.status === "failed" && "border-neon-pink/30 bg-neon-pink/5"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: validator.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 23
                                                        }, this),
                                                        getStatusIcon(validator.status)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 21
                                                }, this),
                                                validator.confidence !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative h-2 bg-black/30 rounded-full overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-y-0 left-0 rounded-full transition-all duration-1000", validator.status === "verified" && "bg-neon-green", validator.status === "failed" && "bg-neon-pink"),
                                                        style: {
                                                            width: `${validator.confidence}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                            className: "w-3 h-3 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Processing..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 23
                                                }, this),
                                                validator.confidence !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mt-1",
                                                    children: [
                                                        "Confidence: ",
                                                        validator.confidence,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, validator.name, true, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full bg-neon-purple shadow-[0_0_10px_var(--neon-purple)]"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 h-0.5 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green max-w-xs"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_10px_var(--neon-cyan)]"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-green to-neon-green max-w-xs"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-3 h-3 rounded-full", check.consensus === "verified" && "bg-neon-green shadow-[0_0_10px_var(--neon-green)]", check.consensus === "pending" && "bg-yellow-500 shadow-[0_0_10px_#eab308] animate-pulse", check.consensus === "failed" && "bg-neon-pink shadow-[0_0_10px_var(--neon-pink)]")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, check.id, true, {
                            fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/app/app/cross-checks/page.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(CrossChecksPage, "sl3kTYa0MAn7HABaC/fYdZwvpQU=");
_c = CrossChecksPage;
var _c;
__turbopack_context__.k.register(_c, "CrossChecksPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CircleCheckBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CircleCheckBig", [
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
"[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)");
}),
"[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CircleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CircleX", [
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
        "path",
        {
            d: "m15 9-6 6",
            key: "1uzhvr"
        }
    ],
    [
        "path",
        {
            d: "m9 9 6 6",
            key: "z0biqf"
        }
    ]
]);
;
 //# sourceMappingURL=circle-x.js.map
}),
"[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript)");
}),
"[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Clock", [
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
"[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
"[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>RefreshCw
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const RefreshCw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("RefreshCw", [
    [
        "path",
        {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc"
        }
    ],
    [
        "path",
        {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }
    ],
    [
        "path",
        {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3"
        }
    ],
    [
        "path",
        {
            d: "M8 16H3v5",
            key: "1cv678"
        }
    ]
]);
;
 //# sourceMappingURL=refresh-cw.js.map
}),
"[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefreshCw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$veri$2d$verse$2d$ui$2d$design$2f$veri$2d$verse$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/veri-verse-ui-design/veri-verse-ui-design/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Downloads_veri-verse-ui-design_veri-verse-ui-design_38ce68ee._.js.map