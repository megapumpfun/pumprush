# Telegram Bot with Supabase Integration

This bot listens for the `/rushmeta` command in Telegram groups and queries Supabase for data.

## Setup

1. Create a Telegram bot through [@BotFather](https://t.me/botfather) and get the token
2. Set up your Supabase project and get the URL and anon key
3. Copy `.env.example` to `.env` and fill in your credentials:
   - `TELEGRAM_BOT_TOKEN`
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
4. Install dependencies: `npm install`
5. Start the bot: `npm start`

## Deployment to DigitalOcean

1. Install the DigitalOcean CLI:
   ```bash
   # macOS
   brew install doctl
   
   # Windows
   choco install doctl
   
   # Linux
   snap install doctl
   ```

2. Authenticate with DigitalOcean:
   ```bash
   doctl auth init
   ```
