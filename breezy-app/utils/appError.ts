class AppError extends Error {
  statusCode: number;
  status: string;
  message: string;

  constructor(message: string, statusCode: number, error: unknown) {
    super('getMessage(statusCode, message, error)');

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.message = `${statusCode}`.startsWith('4')
      ? message
      : error instanceof Error
      ? error.message
      : 'Unknown Error';
  }
}

export default AppError;

function getMessage(code: number, message: string, err: unknown) {
  if (code === 400) {
    return message;
  } else if (err instanceof Error) {
    return err.message;
  } else {
    return 'Unknown Error';
  }
}
