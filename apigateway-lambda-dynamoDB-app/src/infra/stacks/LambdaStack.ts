import * as cdk from "aws-cdk-lib/core";
import { Construct } from "constructs";
import {
  Code,
  Function as LambdaFunction,
  Runtime,
} from "aws-cdk-lib/aws-lambda";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { join } from "path";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";

interface LambdaStackProps extends cdk.StackProps {
  table: dynamodb.ITable;
}

export class LambdaStack extends cdk.Stack {
  public readonly helloLambda: lambda.Function;

  constructor(scope: Construct, id: string, props: LambdaStackProps) {
    super(scope, id, props);

    this.helloLambda = new LambdaFunction(this, "HelloLambda", {
      runtime: Runtime.NODEJS_20_X,
      handler: "hello.handler",
      code: Code.fromAsset(join(__dirname, "..", "..", "services")),
      environment: {
        TABLE_NAME: props.table.tableName,
      },
    });
    // Grant permissions
    props.table.grantReadWriteData(this.helloLambda);
  }
}
