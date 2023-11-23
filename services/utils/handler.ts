import middy from "@middy/core";
import httpErrorHandler from "@middy/http-error-handler";
import { APIGatewayProxyResultV2, Context } from "aws-lambda";
import { omit } from "ramda";
import {
  IAPIGatewayEvent,
  LambdaType,
  StatusCode,
} from "../../types/response.type";

export default function handler(lambda: LambdaType) {
  return middy(async function (
    event: IAPIGatewayEvent,
    context: Context
  ): Promise<APIGatewayProxyResultV2> {
    let body, statusCode;
    try {
      const lambdaResponse = await lambda(event, context);
      statusCode = lambdaResponse.statusCode;
      body = omit(["statusCode"], lambdaResponse);
    } catch (e: any) {
      body = { error: (e as Error).message };
      statusCode = StatusCode.ERROR;
    }
    return {
      statusCode,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  }).use([
    // httpMultipartBodyParser(),
    httpErrorHandler(),
  ]);
}
