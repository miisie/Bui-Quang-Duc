import { StatusCodes } from 'http-status-codes';


export class NotFoundException extends Error {
  status: number;
  data: object;
  message: string;

  constructor(message: string) {
    super(message);
    this.status = StatusCodes.NOT_FOUND;
    this.message = message;
  }
}

export class BadRequestException extends Error {
  data: object;
  status: number;
  message: string;

  constructor(message: string) {
    super(message);
    this.status = StatusCodes.BAD_REQUEST;
    this.message = message;
  }
}