import * as cdk from "aws-cdk-lib/core";
import { Construct } from "constructs";
import {
  Code,
  Function as LambdaFunction,
  Runtime,
} from "aws-cdk-lib/aws-lambda";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { join } from "path";

export class LambdaStack extends cdk.Stack {
  public readonly helloLambda: lambda.Function;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.helloLambda = new LambdaFunction(this, "HelloLambda", {
      runtime: Runtime.NODEJS_20_X,
      handler: "hello.handler",
      code: Code.fromAsset(join(__dirname, "..", "..", "services")),
    });
  }
}
