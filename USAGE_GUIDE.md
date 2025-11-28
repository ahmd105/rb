    # 🎥 AI Receptionist Creator - Usage Guide

## Overview

Your AI Receptionist Creator is now running at **http://localhost:5173**

![Application Screenshot](file:///C:/Users/Lenovo/.gemini/antigravity/brain/0ff8c693-ff52-45f4-8d17-ed3399a60caa/initial_app_view_1764340286669.png)

## How to Use (Step-by-Step)

### Step 1: Describe Your Receptionist 📝

1. **Click on the text area** in the center of the page
2. **Type a detailed description** of what you want your AI receptionist to do

**Example:**
```
I need an AI receptionist for a pizza restaurant. The receptionist should:
- Greet customers warmly
- Take their order including pizza type, size, and toppings
- Handle special dietary requests
- Provide estimated delivery times of 30-45 minutes
- Confirm the delivery address
- Be friendly and professional
```

**Tips:**
- Be specific about the role and tasks
- Include tone/personality instructions ("friendly", "professional")
- Mention special scenarios to handle
- You have up to 5000 characters (counter shows in bottom-right)

### Step 2: Create the Receptionist ⚡

1. **Click the "Create Receptionist" button** (it turns from gray to blue when you have text)
2. **Wait 1-2 seconds** for the generation
3. Watch the button animate with a loading spinner

### Step 3: Review the Configuration 👀

After generation, you'll see:

- **System Prompt**: The full prompt that will guide your AI
- **Model**: Which AI model will be used (e.g., "gpt-4")
- **Node Type**: The n8n node type (e.g., "n8n-nodes-base.openAi")

![Generated Configuration](file:///C:/Users/Lenovo/.gemini/antigravity/brain/0ff8c693-ff52-45f4-8d17-ed3399a60caa/final_result_1764340330648.png)

### Step 4: Download for n8n 📥

1. **Click the "Download JSON" button** in the top-right of the configuration box
2. The file `receptionist-workflow.json` will download automatically
3. **Import this file into n8n**:
   - Open your n8n instance
   - Click "Import from File"
   - Select the downloaded JSON
   - Your AI receptionist workflow is ready!

## Features You'll Notice ✨

### Security
- ✅ Input is automatically sanitized (no harmful characters)
- ✅ 5000 character limit enforced
- ✅ Secure file downloads

### User Experience
- 🎨 **Beautiful gradient effects** - Hover over the text area to see the purple glow
- 📊 **Character counter** - Always know how many characters you have left
- ⚡ **Live validation** - Button only enables when you have valid text
- 🔄 **Loading states** - Clear feedback when processing
- 📱 **Responsive design** - Works on all screen sizes

### Accessibility
- ♿ Screen reader friendly
- ⌨️ Full keyboard navigation
- 🎯 Clear focus indicators

## Troubleshooting

### "Button is grayed out"
- Make sure you've typed at least one character
- The text area must not be empty

### "Nothing happens when I click Create"
- Check the browser console (F12) for any errors
- Try refreshing the page (F5)
- Ensure the dev server is still running

### "Download doesn't work"
- Check your browser's download settings
- Ensure pop-ups aren't blocked
- Try a different browser

## Video Demo 🎬

Watch the full demo recording here:
- [Creating a Receptionist](file:///C:/Users/Lenovo/.gemini/antigravity/brain/0ff8c693-ff52-45f4-8d17-ed3399a60caa/creating_receptionist_demo_1764340302744.webp)

## Next Steps

1. **Try different scenarios**: Hotel receptionist, doctor's office, tech support
2. **Customize the prompt**: Edit App.jsx to add more configuration options
3. **Connect to n8n**: Import your JSON and test with real workflows
4. **Add LLM integration**: Connect to OpenAI or Anthropic for dynamic prompt generation

## Support

Questions? Check:
- `client/README.md` - Full documentation
- `SECURITY_REPORT.md` - Security details
- GitHub Issues - Report bugs

---

**Enjoy creating your AI receptionists!** 🤖✨
