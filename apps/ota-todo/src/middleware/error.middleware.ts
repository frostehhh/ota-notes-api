import { type ApiError } from '@ota/core';

export const errorLogger = (error, req, res, next) => {
  console.error(`Error: ${error.message}`);
  next(error);
};

export const errorResponder = (error: ApiError, req, res, next) => {
  res.header('Content-Type', 'application/json');
  res.status(error.statusCode).json({ status: error.statusCode, code: error.code, message: error.message });
};