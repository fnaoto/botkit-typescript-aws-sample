import * as AWS from "aws-sdk";

const codedeploy = () => {
  return new AWS.CodeDeploy;
};

const CodeDeployListApplications = () => {
  return codedeploy().listApplications().promise();
};

const CodeDeployListDeployments = () => {
  return codedeploy().listDeployments().promise();
};

export { 
  CodeDeployListApplications,
  CodeDeployListDeployments
}
