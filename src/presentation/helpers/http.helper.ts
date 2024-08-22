import { ServerErrorException } from "../exceptions";
import { HttpResponse } from "../protocols";

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerErrorException(),
});
