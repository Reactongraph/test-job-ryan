/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_AUTH_TELEGRAM_BOT_TOKEN: process.env.NEXT_AUTH_TELEGRAM_BOT_TOKEN,
      NEXT_AUTH_ENDPOINT: process.env.NEXT_AUTH_ENDPOINT,
      NEXT_AUTH_TELEGRAM_BOT_SECRET: process.env.NEXT_AUTH_TELEGRAM_BOT_SECRET,
      NEXT_AUTH_URL: process.env.NEXT_AUTH_URL,
    },
  };
  
  export default nextConfig;
  