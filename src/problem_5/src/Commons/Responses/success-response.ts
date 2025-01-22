import { StatusCodes } from 'http-status-codes';

export class SuccessReponse {
    private data: object;
    private status: number;
    private message: string;

    constructor(
        data = {},
        message = "",
        statusCode = StatusCodes.OK,
    ) {
        this.message = message;
        this.status = statusCode;
        this.data = data;
    }
}