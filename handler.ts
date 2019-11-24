import { Handler, SQSHandler } from 'aws-lambda';
import { SQS } from 'aws-sdk';
import 'source-map-support/register';

export const funtionOne: Handler = async (_event, _context) => {
  try {
    const sqs = new SQS({
      region: 'ap-southeast-2'
    });
    const response = await sqs.sendMessage({
      MessageBody: 'hello world',
      QueueUrl: '<your sqs url>'
    }).promise();
    console.log(`Message put on queue`, response);
  } catch (e) {
    console.log('Exception on queue', e);
  }
}

export const funtionTwo: SQSHandler = async (_event, _context) => {
  console.log("I am function two");
  for (let message of _event.Records) {
    console.log(`Handling message: ${message}`);
  }
}