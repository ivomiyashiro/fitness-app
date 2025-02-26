import { ArgumentsHost, Catch, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { CONFIG } from '@/common/config';
import {
  getErrorTitle,
  getIetfErrorUrl,
  getErrorMessages,
} from '@/common/utils/exception-filters.utils';

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

    const responseBody = {
      type,
      title,
      statusCode: status,
      errors,
      timestamp: new Date().toISOString(),
    };

    if (CONFIG.ENVIROMENT === 'development') {
      response.status(status).json({
        ...responseBody,
        stack: exception.stack,
      });

      return;
    }

    response.status(status).json(responseBody);
  }
}

export const HttpExceptionFilter = new ExceptionFilter();
