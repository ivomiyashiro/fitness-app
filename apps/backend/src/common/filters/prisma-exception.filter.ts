import { ArgumentsHost, Catch, HttpStatus, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Request, Response } from 'express';
import { Prisma } from '@/prisma/generated/prisma-client';
import { CONFIG } from '@/common/config';
import {
  getIetfErrorUrl,
  getErrorTitle,
} from '@/common/utils/exception-filters.utils';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  private readonly logger = new Logger(PrismaClientExceptionFilter.name);
  private readonly DEFAULT_STATUS_CODE = HttpStatus.INTERNAL_SERVER_ERROR;

  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const errors = exception.message.replace(/\n/g, '');
    const type = getIetfErrorUrl(this.DEFAULT_STATUS_CODE);
    const title = getErrorTitle(this.DEFAULT_STATUS_CODE);

    this.logger.error(
      `${request.method} ${request.url} ${this.DEFAULT_STATUS_CODE} ${JSON.stringify(
        errors,
      )}`,
    );

    const responseBody = {
      type,
      title,
      statusCode: this.DEFAULT_STATUS_CODE,
      timestamp: new Date().toISOString(),
    };

    if (CONFIG.ENVIROMENT === 'development') {
      response.status(this.DEFAULT_STATUS_CODE).json({
        ...responseBody,
        errors,
        stack: exception.stack,
      });

      return;
    }

    response.status(this.DEFAULT_STATUS_CODE).json(responseBody);
  }
}

export const PrismaExceptionFilter = new PrismaClientExceptionFilter();
