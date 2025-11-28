import React, { useState } from 'react';
import Hero from './components/Hero';
import PromptInterface from './components/PromptInterface';
import ConfigurationView from './components/ConfigurationView';

function App() {
  const [generatedConfig, setGeneratedConfig] = useState(null);

  const handleGenerate = (taskDescription) => {
    // Validate and sanitize input
    if (!taskDescription || typeof taskDescription !== 'string') {
      console.error('Invalid task description');
      return;
    }

    // Sanitize input (limit length and remove dangerous characters)
    const sanitizedDescription = taskDescription
      .trim()
      .slice(0, 5000) // Limit to 5000 characters
      .replace(/[<>]/g, ''); // Remove potential HTML tags

    if (sanitizedDescription.length === 0) {
      console.error('Task description cannot be empty');
      return;
    }

    // Mock generation logic for now
    const config = {
      name: "AI Receptionist",
      nodes: [
        {
          parameters: {
            model: "gpt-4",
            prompt: `You are an AI receptionist. Your task is: ${sanitizedDescription}`
          },
          name: "AI Agent",
          type: "n8n-nodes-base.openAi",
          typeVersion: 1,
          position: [450, 300]
        }
      ],
      connections: {}
    };
    setGeneratedConfig(config);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Hero />
        <main className="mt-12 space-y-16">
          <PromptInterface onGenerate={handleGenerate} />
          {generatedConfig && (
            <ConfigurationView config={generatedConfig} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
