import { HttpResponse } from "../protocols";

export const ok = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
});

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});
