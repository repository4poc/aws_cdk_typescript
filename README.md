# Typescript with AWS

## Typescript

A superset of JavaScript with additiaonal features like

- Types - string, bool etc (Help identify errors at compile time.
  )
- classes
- interfaces
- decorators

### NodeJS version used

- NodeJS is used for running javascript on server outside browser
- NodeJS is bundled with npm
  - npm - JavaScript package manager
  - pip - python package namanger
  - nuget - dotnet package manager
  - mvn - java package manager

- node --version (24.13.1 (LTS))

### Create an AWS Cli user with admin access

cli_user

### Install AWS Cli onto your machine and configure aws account

PS C:\Users\varin> aws configure

AWS Access Key ID [****************2MX3]: IAR3GDZ\*\*224MCIJ57

AWS Secret Access Key [****************rjLj]: 9erPQ8+\*\*\*\*O3YxOTi

Default region name [eu-west-1]: eu-north-1 for stockholms

### Verify your configuration

PS C:\Users\varin> aws s3 ls

2024-09-13 12:10:27 codepipeline-us-east-1-273226906868

### AWS Cloud Development Kit - CDK vs AWS Cloudformation

- AWS Cloud Formation is an Infrastructure As A Code Service provided by AWS.
- AWS CDK is an abstration over AWS Cloud Formation
- AWS Cloud Formation uses JSON as Template

### Create AWS CDK Project

- insall aws-cdk and typescript package using npm for creating aws-cdk application
  - npm install -g aws-cdk typescript
    - aws-cdk ( install cdk )
    - typescript ( install tsc a typescript compiler )

- Create a cdk app
  - `mkdir cdk-app`
  - `cd cdk-app`
  - `cdk init app --language=typescript` (Create CDK app project with typescript as language)
  - `cdk bootstrap` (Deploy 'CDKToolkit' in Cloud Formation)
  - `cdk synth` (Dryrun 'Cdkapp' resources in Cloud Formation without actual deployment, just create template in the cdk.out folder, CDK synthesizes CloudFormation templates for each individual stack defined in your bin file, allowing for organized and modular resource management. This capability is essential for deploying complex infrastructure efficiently.)
  - `cdk deploy` (deploy this stack to your default AWS account/region)
  - `cdk deploy --parameters duration=1`
  - `cdk diff` compare deployed stack with current state
  - `cdk destroy` destroy the cdk stack
  - `cdk destroy <stack-name>` destroy the cdk stack
  - `cdk ls` List cdk stack

### AWS CDK - Documentation

    http://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html


    https://github.com/aws/aws-cdk

### Key points

- CDK destroy does not delete buckets created under stack, as s3 bucket default RemovalPolicy = Orphaned

### What is a CloudFormation stack

A CloudFormation stack is indeed a group of AWS resources managed together, all defined in a single template file. This structure allows you to deploy and manage resources as a cohesive unit, simplifying infrastructure management and enabling reproducibility.

### If we delete a CloudFormation stack, all it's resources will always be deleted.

No, CloudFormation cannot delete non-empty S3 buckets, which means that not all resources will be removed when a stack is deleted. Additionally, certain resources can be retained even after the stack deletion, reinforcing the idea that the deletion process is not absolute.

both the CDK deploy and CDK diff commands invoke the synth command to generate the CloudFormation templates necessary for deployment and comparison of stacks.

L3 CDK construct is designed to abstract and combine multiple L1 (low-level) and L2 (high-level) constructs, simplifying resource management and enhancing reusability in your infrastructure code.
