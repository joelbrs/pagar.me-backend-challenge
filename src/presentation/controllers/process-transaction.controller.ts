import { PaymentMethod } from "@/domain/models";
import { ok } from "../helpers";
import { Controller, HttpRequest, HttpResponse } from "../protocols";
import { PaymentCard } from "@/domain/value-objects";

export class ProcessTransaction implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    return ok(httpRequest.body);
  }
}

export namespace ProcessTransaction {
  export type Request = {
    value: number;
    description: number;
    paymentMethod: PaymentMethod;
    cardInformations: PaymentCard;
  };
}
