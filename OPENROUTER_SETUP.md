# OpenRouter Integration Setup Instructions

## 🚀 Getting Started

### 1. Get OpenRouter API Key
1. Visit [OpenRouter.ai](https://openrouter.ai/)
2. Sign up for an account
3. Go to your dashboard and generate an API key
4. Copy the API key

### 2. Configure Environment Variables
1. Open the `.env.local` file in your project root
2. Replace `your_openrouter_api_key_here` with your actual API key:
   ```
   OPENROUTER_API_KEY=sk-or-v1-your-actual-key-here
   ```

### 3. Model Options
You can change the AI model in `/src/app/api/chat/route.js`. Available models:
- `anthropic/claude-3.5-sonnet` (recommended, current default)
- `openai/gpt-4o`
- `openai/gpt-4o-mini` (faster, cheaper)
- `anthropic/claude-3-haiku` (fastest)
- `google/gemini-pro-1.5`

### 4. Cost Considerations
- Claude 3.5 Sonnet: ~$3 per 1M input tokens, ~$15 per 1M output tokens
- GPT-4o: ~$5 per 1M input tokens, ~$15 per 1M output tokens
- GPT-4o Mini: ~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens

### 5. Testing
1. Start your development server: `npm run dev`
2. Open the chat widget
3. Try asking: "Explain 5G technology" or use the quick actions

### 6. Features Implemented
✅ Real AI responses using OpenRouter
✅ Context-aware conversations (remembers last 10 messages)
✅ Telecommunications-focused system prompt
✅ Error handling with fallback messages
✅ Maintains your existing terminal-style UI
✅ Professional telecommunications responses

### 7. Troubleshooting
- **No responses**: Check your API key in `.env.local`
- **Rate limiting**: Wait a moment and try again
- **Network errors**: Check your internet connection
- **Console errors**: Open browser dev tools for detailed error messages

### 8. Customization Options
- Change model in `/src/app/api/chat/route.js`
- Modify system prompt to adjust AI personality
- Adjust `max_tokens` for longer/shorter responses
- Modify `temperature` (0.1-1.0) for more focused/creative responses

## 🔧 Technical Details

The integration includes:
- **API Route**: `/src/app/api/chat/route.js` handles OpenRouter communication
- **System Prompt**: Configured for telecommunications expertise
- **Error Handling**: Graceful fallbacks with themed error messages
- **Conversation Memory**: Maintains context for better responses
- **Security**: API key stored securely in environment variables

Your chatbot is now powered by advanced AI while maintaining the telecommunications theme and terminal aesthetics!
