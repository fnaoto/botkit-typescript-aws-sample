import { Botkit } from "botkit";
import { WebAdapter } from "botbuilder-adapter-web";
import { CodeBuildListProjects } from "./aws/CodeBuild";
import {
  CodeDeployListApplications,
  CodeDeployListDeployment,
  CodeDeployGetDeploymentReady
} from "./aws/CodeDeploy";
import {
  GitHubListTags
} from "./github/Tags"
import { Credentials } from "./aws/Credentials";

const adapter = new WebAdapter;

const controller = new Botkit({
  adapter: adapter,
});

controller.on("test", async (bot, msg) => {
  await bot.reply(msg, "I received an event: " + msg.text);
});

controller.hears(new RegExp(/^codebuild (.*?)$/i), 'message', async (bot, message) => {
  Credentials(message.matches[1]);
  await bot.reply(message, await CodeBuildListProjects());
});

controller.on("codedeploy-list-deploy", async (bot, msg) => {
  await bot.reply(msg, await CodeDeployListDeployment());
});

controller.on("codedeploy-get-deploy-ready", async (bot, msg) => {
  await bot.reply(msg, await CodeDeployGetDeploymentReady());
});

controller.on("codedeploy-list-app", async (bot, msg) => {
  await bot.reply(msg, await CodeDeployListApplications());
});

controller.on("github-list-tags", async (bot, msg) => {
  await bot.reply(msg, await GitHubListTags("fnaoto", "botkit-typescript-aws-sample", 1));
});
