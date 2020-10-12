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

const CodeDeployListDeploymentsReady = async () => {
  return await codedeploy().listDeployments({
    includeOnlyStatuses: ["Ready"]
  }).promise();
};

const CodeDeployGetDeployment = async (deploymentId: string) => {
  return await codedeploy().getDeployment({
    deploymentId: deploymentId
  }).promise();
};

const CodeDeployListDeployment = async () => {
  const deploymentIds = await CodeDeployListDeployments()
  return deploymentIds.deployments;
}

const CodeDeployGetDeploymentReady = async () => {
  const deploymentIds = await CodeDeployListDeploymentsReady()
  if (deploymentIds.deployments.length > 0) {
    for (const deploymentId of deploymentIds.deployments) {
      return await CodeDeployGetDeployment(deploymentId)
    }
  }
  return [];
}

export {
  CodeDeployListApplications,
  CodeDeployListDeployments,
  CodeDeployListDeployment,
  CodeDeployGetDeploymentReady
}
