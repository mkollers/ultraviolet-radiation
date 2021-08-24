import { Handler } from '@netlify/functions';
import * as https from 'https';

import { HttpErrorResponse } from './http-error-response';


export const handler: Handler = async (event, context) => {
  const params = event.queryStringParameters;
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers
    };
  }

  headers['content-type'] = 'application/json; charset=utf-8';
  // Validation
  if (!params.lat) {
    return {
      statusCode: 400,
      body: JSON.stringify(new HttpErrorResponse('MissingQueryParameter', "The query parameter lat is required.")),
      headers
    };
  }
  if (!params.lng) {
    return {
      statusCode: 400,
      body: JSON.stringify(new HttpErrorResponse('MissingQueryParameter', "The query parameter lng is required.")),
      headers
    };
  }

  const [code, body] = await callOpenUV(+params.lat, +params.lng);

  return {
    statusCode: code,
    body,
    headers
  }
}

function callOpenUV(lat: number, lng: number): Promise<[number, string]> {
  return new Promise((resolve, reject) => {
    const apiKey = process.env.OPENUV_APIKEY;

    const opt: https.RequestOptions = {
      headers: {
        'x-access-token': apiKey
      }
    };

    const url = `https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${lng}`;
    https.get(url, opt, (resp) => {
      let data = '';

      // A chunk of data has been received.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        resolve([resp.statusCode, data]);
      });

    }).on("error", (err) => {
      reject([500, err.message]);
    });
  });
}
