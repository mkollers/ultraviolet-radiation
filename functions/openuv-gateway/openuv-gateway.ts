import { Handler, HandlerContext } from '@netlify/functions'
import * as https from 'https';

const url = 'https://api.openuv.io/api/v1/uv';

export const handler: Handler = async (event, context) => {
  const pa = event.queryStringParameters

  const [code, body] = await callOpenUV(event.queryStringParameters);

  return {
    statusCode: code,
    body: JSON.stringify(body)
  }
}

function callOpenUV(): Promise<[number, any]> {
  return new Promise((resolve, reject) => {
    const apiKey = process.env.OPENUV_APIKEY;

    const opt: https.RequestOptions = {
      headers: {
        'x-access-token': apiKey
      }
    };

    https.get(url, opt, (resp) => {
      let data = '';
  
      // A chunk of data has been received.
      resp.on('data', (chunk) => {
        data += chunk;
      });
  
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        resolve([resp.statusCode, JSON.parse(data)]);
      });
  
    }).on("error", (err) => {
      reject([500, err.message]);
    });
  });
}
