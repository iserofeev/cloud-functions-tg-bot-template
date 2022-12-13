import { Telegraf } from "telegraf";

const BOT_TOKEN = process.env.BOT_TOKEN;
const bot = new Telegraf(BOT_TOKEN);
// echo
bot.on("text", (ctx) => ctx.reply(ctx.message.text));

export async function handler(event, context) {
  const message = JSON.parse(event.body);
  await bot.handleUpdate(message);

  return {
    statusCode: 200,
    body: process.env.COMMIT_HASH,
  };
}
