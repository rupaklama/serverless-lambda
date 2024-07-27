"use strict";

module.exports.welcome = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Welcome to the Serverless function AWS Lambda!",
      },
      null,
      2
    ),
  };
};

module.exports.checkEvent = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "check Event",
        input: event,
      },
      null,
      2
    ),
  };
};

// Use this code if you don't use the http event with the LAMBDA-PROXY integration
// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
