import * as cdk from "aws-cdk-lib/core";
import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";

interface ApiStackProps extends cdk.StackProps {
  helloLambda: lambda.IFunction;
}

export class APIStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    // API Gateway
    const api = new apigateway.RestApi(this, "HelloApi", {
      restApiName: "Hello Service",
      description: "CDK API Gateway with Lambda integration",
    });

    // Resource: /hello
    const helloResource = api.root.addResource("hello");

    // GET /hello
    helloResource.addMethod(
      "GET",
      new apigateway.LambdaIntegration(props.helloLambda),
    );
  }
}
