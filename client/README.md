# AI Receptionist Creator 🤖

A modern web application for creating custom AI receptionists powered by n8n workflows.

## Features

✨ **Easy Configuration** - Describe your receptionist's role in plain English
🎨 **Modern UI** - Beautiful dark-mode interface with glassmorphism effects
📦 **n8n Export** - One-click JSON download for immediate n8n import
🔒 **Secure** - Input validation, sanitization, and security headers
♿ **Accessible** - ARIA labels and keyboard navigation support
⚡ **Fast** - Optimized build with sub-200KB bundle size

## Getting Started

### Prerequisites

- Node.js 18+ (you're running 20.16.0 ✓)
- npm 7+

### Installation

```bash
cd client
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see the app.

### Production Build

```bash
npm run build
npm run preview
```

## Security

This application implements multiple security layers:

- ✅ Input sanitization (XSS prevention)
- ✅ Character limits (5000 chars max)
- ✅ Security headers (X-Frame-Options, X-Content-Type-Options)
- ✅ Memory leak prevention
- ✅ Safe DOM manipulation
- ✅ Validated exports

See [SECURITY_REPORT.md](../SECURITY_REPORT.md) for details.

## Usage

1. **Describe Your Receptionist**
   - Enter a detailed description of your receptionist's role
   - Example: "I need a receptionist for a dental clinic who can schedule appointments, answer FAQs about pricing, and handle cancellations politely."

2. **Generate Configuration**
   - Click "Create Receptionist"
   - View the generated system prompt and settings

3. **Export to n8n**
   - Click "Download JSON"
   - Import the file into your n8n workflow

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Landing section
│   │   ├── PromptInterface.jsx   # Input form
│   │   └── ConfigurationView.jsx # Results display
│   ├── App.jsx                   # Main app logic
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles (Tailwind)
├── index.html                    # HTML template
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind configuration
└── package.json
```

## Technologies

- **React** - UI library
- **Vite** - Build tool  
- **TailwindCSS** - Styling framework
- **n8n** - Workflow automation (export target)

## License

MIT

## Contributing

Contributions are welcome! Please ensure all security best practices are maintained.
