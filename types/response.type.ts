import { Context } from "aws-lambda";
import { APIGatewayProxyEventV2 } from "aws-lambda";

export interface IAPIGatewayEvent extends APIGatewayProxyEventV2 {
  rawBody: string;
  body: any;
  pathParameters: any;
  queryStringParameters: any;
}

export enum StatusCode {
  OK = 200,
  ERROR = 500,
  BAD_REQUEST = 400,
}

export type LambdaResponseType = {
  statusCode: number;
  [t: string]: string | number | boolean;
  message: string;
};
export type LambdaType = (
  event: IAPIGatewayEvent,
  context?: Context
) => Promise<LambdaResponseType>;
