import { HttpException } from '@nestjs/common';

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

type ErrorResponse = {
  message: string | Record<string, string[]>;
};

const getErrorMessages = (exception: HttpException): string[] => {
  const response = exception.getResponse() as string | ErrorResponse;

  if (typeof response === 'string') {
    return [response];
  }

  if (!response || typeof response !== 'object') {
    return ['Unknown error occurred'];
  }

  if (!('message' in response)) {
    return ['Unknown error occurred'];
  }

  if (typeof response.message === 'string') {
    return [response.message];
  }

  return Object.values(response.message)
    .flat()
    .filter((msg): msg is string => typeof msg === 'string');
};

export { getErrorTitle, getIetfErrorUrl, getErrorMessages };
