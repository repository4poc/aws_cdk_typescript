const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async () => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      id: Date.now().toString(),
      message: "Hello from Lambda + DynamoDB",
    },
  };

  await dynamo.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Item stored" }),
  };
};
