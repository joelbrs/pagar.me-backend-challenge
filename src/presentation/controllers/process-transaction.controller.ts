import { PaymentMethod } from "@/domain/models";
import { badRequest, ok } from "../helpers";
import { Controller, HttpRequest, HttpResponse, Validator } from "../protocols";
import { PaymentCard } from "@/domain/value-objects";

export class ProcessTransactionController implements Controller {
  constructor(private readonly validator: Validator) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validator.validate(httpRequest.body);

    if (error) {
      return badRequest(error);
    }

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
