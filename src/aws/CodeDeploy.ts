import * as AWS from "aws-sdk";

const codedeploy = () => {
  return new AWS.CodeDeploy;
};

const CodeDeployListApplications = () => {
  return codedeploy().listApplications().promise();
};

const CodeDeployListDeployments = async () => {
  return await codedeploy().listDeployments().promise();
};

const CodeDeployListDeployment = async () => {
  const deploymentIds = await CodeDeployListDeployments()
  return deploymentIds.deployments;
}

export {
  CodeDeployListApplications,
  CodeDeployListDeployments,
  CodeDeployListDeployment
}
