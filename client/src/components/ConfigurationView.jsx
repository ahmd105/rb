import React from 'react';

const ConfigurationView = ({ config }) => {
    const handleDownload = () => {
        try {
            // Validate config before download
            if (!config || !config.nodes || !Array.isArray(config.nodes)) {
                console.error('Invalid configuration object');
                return;
            }

            const jsonString = JSON.stringify(config, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);

            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", url);
            downloadAnchorNode.setAttribute("download", "receptionist-workflow.json");
            downloadAnchorNode.style.display = 'none';

            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            document.body.removeChild(downloadAnchorNode);

            // Clean up the blob URL
            setTimeout(() => URL.revokeObjectURL(url), 100);
        } catch (error) {
            console.error('Error downloading configuration:', error);
        }
    };

    // Validate config structure
    if (!config || !config.nodes || !config.nodes[0]) {
        return (
            <div className="bg-red-900/20 border border-red-800 rounded-2xl p-6">
                <p className="text-red-400">Invalid configuration generated. Please try again.</p>
            </div>
        );
    }

    const node = config.nodes[0];
    const prompt = node?.parameters?.prompt || 'No prompt available';
    const model = node?.parameters?.model || 'Unknown';
    const nodeType = node?.type || 'Unknown';

    return (
        <div className="animate-fade-in-up">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
                    <div>
                        <h3 className="text-xl font-semibold text-white">Generated Configuration</h3>
                        <p className="text-sm text-slate-400 mt-1">Ready for n8n import</p>
                    </div>
                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700 hover:border-slate-600"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download JSON
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 uppercase tracking-wider">System Prompt</label>
                        <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-sm text-slate-300 whitespace-pre-wrap max-h-64 overflow-y-auto custom-scrollbar">
                            {prompt}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400 uppercase tracking-wider">Model</label>
                            <div className="bg-slate-950 rounded-lg p-3 border border-slate-800 text-slate-300">
                                {model}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400 uppercase tracking-wider">Node Type</label>
                            <div className="bg-slate-950 rounded-lg p-3 border border-slate-800 text-slate-300">
                                {nodeType}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfigurationView;
