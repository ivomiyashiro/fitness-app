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

const getErrorMessages = (exception: string | string[]) => {
  if (typeof exception === 'string') {
    return [exception];
  }

  // When exception is from class-validator or class-transformer
  // push all messages to the array and return it
  const errorMessages: string[] = [];
  Object.keys(exception).forEach((key) => {
    if (key !== 'message' || !Array.isArray(exception[key])) return;

    exception[key].forEach((message) => {
      if (typeof message !== 'string') return;
      errorMessages.push(message);
    });
  });

  return errorMessages;
};

export { getErrorTitle, getIetfErrorUrl, getErrorMessages };
