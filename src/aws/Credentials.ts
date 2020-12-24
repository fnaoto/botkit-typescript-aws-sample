import * as AWS from "aws-sdk";

const Credentials = (profile: string) => {
  process.env.AWS_SDK_LOAD_CONFIG = "true"
  // process.env.AWS_PROFILE = profile
  AWS.config.credentials = new AWS.SharedIniFileCredentials({ profile: profile });
}

export { Credentials }
