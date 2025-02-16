import { Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

const getErrorTitle = (status: number) => {
  switch (status) {
    case 400:
      return 'Bad Request';
    case 401:
      return 'Unauthorized';
    case 403:
      return 'Forbidden';
    case 404:
      return 'Not Found';
    case 500:
      return 'Internal Server Error';
    default:
      return 'Unknown Error';
  }
};

const getIetfErrorUrl = (status: number) => {
  switch (status) {
    case 400:
      return 'https://tools.ietf.org/html/rfc7231#section-6.5.1';
    case 401:
      return 'https://tools.ietf.org/html/rfc7235#section-3.1';
    case 403:
      return 'https://tools.ietf.org/html/rfc7231#section-6.5.3';
    case 404:
      return 'https://tools.ietf.org/html/rfc7231#section-6.5.4';
    case 500:
      return 'https://tools.ietf.org/html/rfc7231#section-6.6.1';
    default:
      return 'https://tools.ietf.org/html/rfc7231#section-6.6.1';
  }
};

const getErrorMessages = (exception: HttpException) => {
  const exceptionResponse = exception.getResponse();

  if (typeof exceptionResponse === 'string') {
    return [exceptionResponse];
  }

  // When exception is from class-validator
  const errorMessages: string[] = [];
  Object.keys(exceptionResponse).forEach((key) => {
    if (key !== 'message' || !Array.isArray(exceptionResponse[key])) return;

    exceptionResponse[key].forEach((message) => {
      if (typeof message !== 'string') return;
      errorMessages.push(message);
    });
  });

  return errorMessages;
};

@Catch(HttpException)
class ExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(ExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status = exception.getStatus();

    const errors = getErrorMessages(exception);
    const type = getIetfErrorUrl(status);
    const title = getErrorTitle(status);

    this.logger.error(
      `${request.method} ${request.url} ${status} ${JSON.stringify(errors)}`,
    );

    response.status(status).json({
      type,
      title,
      statusCode: status,
      errors,
      timestamp: new Date().toISOString(),
    });
  }
}

export const HttpExceptionFilter = new ExceptionFilter();
