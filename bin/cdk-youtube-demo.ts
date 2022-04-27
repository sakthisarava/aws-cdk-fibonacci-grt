#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { FargateDemoStack } from '../lib/fargate';
import { CloudfrontDemoStack } from "../lib/cloudfront";

const app = new cdk.App();

// fargate stack
new FargateDemoStack(app, 'FargateDemoStack', {
  
  env: { account: '202702842874', region: 'us-east-1' },
});


// cloudfront stack
new CloudfrontDemoStack(app, 'CloudfrontDemoStack', {
  stage: "prod",
  
  env: { account: '202702842874', region: 'us-east-1' },
});