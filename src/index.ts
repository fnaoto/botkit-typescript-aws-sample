import { Botkit } from "botkit";
import { WebAdapter } from "botbuilder-adapter-web";
import { CodeBuildListProjects } from "./aws/CodeBuild";
import {
  CodeDeployListApplications,
  CodeDeployListDeployment,
  CodeDeployGetDeploymentReady
} from "./aws/CodeDeploy";

const adapter = new WebAdapter;

const controller = new Botkit({
  adapter: adapter,
});

controller.on("message", async (bot, message) => {
  await bot.reply(message, "I received an message event.");
});

controller.on("codebuild", async (bot, message) => {
  await bot.reply(message, await CodeBuildListProjects());
});

controller.on("codedeploy-list-deploy", async (bot, message) => {
  await bot.reply(message, await CodeDeployListDeployment());
});

controller.on("codedeploy-get-deploy-ready", async (bot, message) => {
  await bot.reply(message, await CodeDeployGetDeploymentReady());
});

controller.on("codedeploy-list-app", async (bot, message) => {
  await bot.reply(message, await CodeDeployListApplications());
});
