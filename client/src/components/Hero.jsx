import React from 'react';

const Hero = () => {
    return (
        <div className="text-center space-y-6">
            <div className="inline-block">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20">
                    AI Receptionist Builder
                </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent pb-2">
                Design Your Perfect <br />
                <span className="text-indigo-500">AI Receptionist</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Describe the role, tone, and specific tasks you need handled.
                We'll generate the configuration for your n8n workflow instantly.
            </p>
        </div>
    );
};

export default Hero;
