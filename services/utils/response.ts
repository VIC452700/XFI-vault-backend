import { LambdaResponseType, StatusCode } from "../../types/response.type";

export const responseSuccess = <T>(
  body: T,
  message = "Success"
): LambdaResponseType => {
  return {
    ...body,
    message,
    statusCode: StatusCode.OK,
    success: true,
  };
};

export const throwExisted = (message: string) => {
  return {
    message,
    statusCode: StatusCode.BAD_REQUEST,
    success: false,
  };
};

export const responseError = (
  message: string,
  codeError: number = StatusCode.ERROR
) => {
  return {
    message,
    statusCode: codeError,
    success: false,
  };
};
