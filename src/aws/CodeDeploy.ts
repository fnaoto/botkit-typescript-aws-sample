import * as AWS from "aws-sdk";

const codedeploy = () => {
  return new AWS.CodeDeploy;
};

const CodeDeploylistApplications = () => {
  return codedeploy().listApplications().promise();
};

export { CodeDeploylistApplications }
