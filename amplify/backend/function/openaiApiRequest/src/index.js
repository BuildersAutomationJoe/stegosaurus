/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["OPENAI_API_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_STEGOSAURUS_GRAPHQLAPIIDOUTPUT
	API_STEGOSAURUS_GRAPHQLAPIENDPOINTOUTPUT
	API_STEGOSAURUS_GRAPHQLAPIKEYOUTPUT
	AUTH_STEGOSAURUS_USERPOOLID
	API_STEGOSAURUS_TEXTINPUTSTABLE_NAME
	API_STEGOSAURUS_TEXTINPUTSTABLE_ARN
	API_STEGOSAURUS_DATAOBJECTTABLE_NAME
	API_STEGOSAURUS_DATAOBJECTTABLE_ARN
	OPENAI_API_KEY
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify('Hello from Lambda!'),
    };
};
