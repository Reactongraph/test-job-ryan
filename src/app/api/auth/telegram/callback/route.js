import { NextResponse } from "next/server";

export const runtime = 'edge'; // Optional: Use edge runtime if needed

export async function GET(req) {
  const url = new URL(req.url);
  const query = Object.fromEntries(url.searchParams);

  const { first_name, hash } = query;

  const token = process.env.NEXT_AUTH_TELEGRAM_BOT_TOKEN;

  if (!token || !hash) {
    return NextResponse.json(
      { error: "Telegram bot token is not defined." },
      { status: 500 }
    );
  }

  const redirectUrl = new URL(
    `/protected?auth=true&username=${encodeURIComponent(first_name)}`,
    `${process.env.NEXT_AUTH_ENDPOINT}`
  );
  return NextResponse.redirect(redirectUrl);
}
