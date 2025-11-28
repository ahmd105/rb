import React, { useState, useRef, useEffect } from 'react';

const PromptInterface = ({ onGenerate }) => {
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!prompt.trim()) return;

        setIsGenerating(true);
        // Simulate API delay
        timeoutRef.current = setTimeout(() => {
            onGenerate(prompt);
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative bg-slate-900 rounded-xl p-1">
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="e.g., I need a receptionist for a dental clinic who can schedule appointments, answer FAQs about pricing, and handle cancellations politely..."
                            className="w-full h-48 bg-slate-950/50 text-slate-200 p-6 rounded-lg border border-slate-800 focus:border-indigo-500/50 focus:ring-0 focus:outline-none resize-none placeholder:text-slate-600 transition-all text-lg"
                            maxLength={5000}
                            aria-label="Task description"
                        />
                        <div className="absolute bottom-3 right-3 text-xs text-slate-500 bg-slate-950/80 px-2 py-1 rounded">
                            {prompt.length}/5000
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={!prompt.trim() || isGenerating}
                        className={`
              relative px-8 py-4 rounded-xl font-semibold text-white shadow-lg transition-all duration-300
              ${!prompt.trim() || isGenerating
                                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                                : 'bg-indigo-600 hover:bg-indigo-500 hover:shadow-indigo-500/25 active:scale-95'}
            `}
                        aria-label={isGenerating ? 'Generating configuration' : 'Create receptionist'}
                    >
                        {isGenerating ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Generating...
                            </span>
                        ) : (
                            'Create Receptionist'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PromptInterface;
