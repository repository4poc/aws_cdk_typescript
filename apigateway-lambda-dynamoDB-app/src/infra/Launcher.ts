import * as cdk from "aws-cdk-lib/core";
import { DataStack } from "./stacks/DataStack";
import { LambdaStack } from "./stacks/LambdaStack";
import { APIStack } from "./stacks/APIStack";
import { DynamoStack } from "./stacks/DynamoDBStack";

const app = new cdk.App();
new DataStack(app, "DataStack", {});
// 1. DynamoDB
const dynamoStack = new DynamoStack(app, "DynamoStack");
// 2. Lambda
const lambdaStack = new LambdaStack(app, "LambdaStack", {
  table: dynamoStack.table,
});
//const lambdaStack = new LambdaStack(app, "LambdaStack", {});
new APIStack(app, "APIStack", { helloLambda: lambdaStack.helloLambda });
