import * as cdk from "aws-cdk-lib/core";
import { DataStack } from "./stacks/DataStack";
import { LambdaStack } from "./stacks/LambdaStack";
import { APIStack } from "./stacks/APIStack";

const app = new cdk.App();
new DataStack(app, "DataStack", {});
const lambdaStack = new LambdaStack(app, "LambdaStack", {});
new APIStack(app, "APIStack", { helloLambda: lambdaStack.helloLambda });
