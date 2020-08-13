import * as AWS from "aws-sdk";

const codebuild = () => {
  return new AWS.CodeBuild;
};

const CodeBuildListProjects = () => {
  return codebuild().listProjects().promise();
};

export { CodeBuildListProjects }
