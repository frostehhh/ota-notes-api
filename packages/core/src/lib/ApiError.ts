export class ApiError extends Error {
  code?: string;
  statusCode: number;

  constructor({ code, message = 'Something went wrong', statusCode = 500 }: { code?: string, message: Error['message'], statusCode?: number} ) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
  }
}