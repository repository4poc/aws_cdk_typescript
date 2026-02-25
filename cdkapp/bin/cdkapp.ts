#!/usr/bin/env node
import * as cdk from "aws-cdk-lib/core";
import { CdkappStack } from "../lib/cdkapp-stack";
import { BucketTaggerAspect } from "./bucketTaggerAspect";

const app = new cdk.App();
new CdkappStack(app, "CdkappStack", {});

const bucketTagger = new BucketTaggerAspect("app-name", "cdkapp");
cdk.Aspects.of(app).add(bucketTagger);
