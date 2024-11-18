const aws = require('aws-sdk');
const OpenAI = require('openai');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  try {
    // Parse the incoming request body
    const body = JSON.parse(event.body);
    const inputText = body.input;

    if (!inputText) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify({ error: 'Input text is required' })
      };
    }

    // Get OpenAI API key from SSM Parameter Store
    const ssm = new aws.SSM();
    const { Parameters } = await ssm.getParameters({
      Names: ["OPENAI_API_KEY"].map(secretName => process.env[secretName]),
      WithDecryption: true,
    }).promise();

    const openaiApiKey = Parameters[0].Value;
    const openai = new OpenAI({ apiKey: openaiApiKey });

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful accounting assistant." },
        { role: "user", content: inputText }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    // Return the response
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      },
      body: JSON.stringify({
        message: completion.choices[0].message.content
      })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      },
      body: JSON.stringify({
        error: 'Internal server error',
        details: error.message
      })
    };
  }
};
