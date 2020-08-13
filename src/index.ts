import { Botkit } from "botkit";
import { WebAdapter } from "botbuilder-adapter-web";

const adapter = new WebAdapter;

const controller = new Botkit({
  adapter: adapter,
});

controller.on("message", async (bot, message) => {
  await bot.reply(message, "I received an message event.");
});
