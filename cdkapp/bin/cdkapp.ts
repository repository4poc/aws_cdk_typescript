#!/usr/bin/env node
import * as cdk from "aws-cdk-lib/core";
import { CdkappStack } from "../lib/cdkapp-stack";

const app = new cdk.App();
new CdkappStack(app, "CdkappStack", {});
