import { Botkit } from "botkit";
import { WebAdapter } from "botbuilder-adapter-web";

const adapter = new WebAdapter({
  host: "0.0.0.0",
  port: 8080
});

const controller = new Botkit({
  adapter: adapter,
});

controller.on("test", async (bot, message) => {
  await bot.reply(message, "I received an test event.");
});
