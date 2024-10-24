const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const textract = new AWS.Textract();

exports.handler = async (event) => {
  const bucketName = event.Records[0].s3.bucket.name;
  const fileName = event.Records[0].s3.object.key;
  
  // Insert job status in DynamoDB
  const params = {
    TableName: 'Jobs',
    Item: {
      id: fileName,
      status: 'Processing',
      timestamp: new Date().toISOString(),
    }
  };

  await dynamoDB.put(params).promise();

  // Process file using Textract (or other services)
  
  // Update DynamoDB with job completion status
  const updateParams = {
    TableName: 'Jobs',
    Key: { id: fileName },
    UpdateExpression: 'set #status = :status',
    ExpressionAttributeNames: {
      '#status': 'status'
    },
    ExpressionAttributeValues: {
      ':status': 'Completed'
    }
  };

  await dynamoDB.update(updateParams).promise();

  return {
    statusCode: 200,
    body: JSON.stringify('Document processed successfully')
  };
};
