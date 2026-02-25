import * as s3 from "aws-cdk-lib/aws-s3";
import * as cdk from "aws-cdk-lib/core";
import { CfnOutput } from "aws-cdk-lib/core";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkappStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Deployment paramters
    const duration = new cdk.CfnParameter(this, "duration", {
      type: "Number",
      minValue: 1,
      maxValue: 10,
      default: 2,
    });

    // S3 Bucket
    const mybucket = new s3.Bucket(this, "MyBucket", {
      lifecycleRules: [
        {
          expiration: cdk.Duration.days(duration.valueAsNumber),
        },
      ],
    });

    new CfnOutput(this, "MyBucket.Name", {
      value: mybucket.bucketName,
    });
  }
}
