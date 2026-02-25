import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";
import * as cdk from "aws-cdk-lib/core";
import { Fn } from "aws-cdk-lib/core";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkappStack extends cdk.Stack {
  private stackSuffix: string;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Initialize stackSuffix
    this.getStackSuffix();

    // Set logicalID of resource
    const pdfBucket = new Bucket(this, "PdfBucket", {
      bucketName: `bucket-pdf-${this.stackSuffix}`,
    });
    (pdfBucket.node.defaultChild as CfnBucket).overrideLogicalId("PdfBucket");
  }

  private getStackSuffix() {
    const stackShortID = Fn.select(2, Fn.split("/", this.stackId));
    this.stackSuffix = Fn.select(4, Fn.split("-", stackShortID));
  }
}
