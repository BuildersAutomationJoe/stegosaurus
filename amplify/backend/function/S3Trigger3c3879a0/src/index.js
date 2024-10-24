const AWS = require('aws-sdk');
const textract = new AWS.Textract();

exports.handler = async (event) => {
  const bucketName = event.Records[0].s3.bucket.name;
  const fileName = event.Records[0].s3.object.key;

  const params = {
    Document: {
      S3Object: {
        Bucket: bucketName,
        Name: fileName
      }
    }
  };

  try {
    // Call Textract to extract text from the document
    const textractData = await textract.detectDocumentText(params).promise();
    console.log('Extracted text:', textractData);

    // Process the extracted text and store it in a database (if needed)
    
  } catch (err) {
    console.error('Error processing document with Textract:', err);
  }

  return {
    statusCode: 200,
    body: JSON.stringify('Document processed successfully')
  };
};
