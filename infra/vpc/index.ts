import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

const vpc = new awsx.ec2.Vpc("mono-repo-vpc", {
    cidrBlock: "10.0.0.0/16",
    subnetSpecs: [{
        type: "Public",
        name: "mono-repo-public"
    }],
    subnetStrategy: "Auto",
    natGateways: {
        strategy: "None"
    }
});

export const vpcId = vpc.vpcId;