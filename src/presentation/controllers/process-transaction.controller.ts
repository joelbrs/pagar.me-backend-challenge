import { PaymentMethod } from "@/domain/models";
import { badRequest, created, ok, serverError } from "../helpers";
import { Controller, HttpRequest, HttpResponse, Validator } from "../protocols";
import { PaymentCard } from "@/domain/value-objects";
import { CreateTransaction } from "@/domain/use-cases";

export class ProcessTransactionController implements Controller {
  constructor(
    private readonly validator: Validator,
    private readonly createTransaction: CreateTransaction
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validator.validate(httpRequest.body);

      if (error) {
        return badRequest(error);
      }

      const response = await this.createTransaction.create(httpRequest.body);
      return created(response);
    } catch {
      return serverError();
    }
  }
}

export namespace ProcessTransactionController {
  export type Request = {
    clientId: number;
    value: number;
    description: string;
    paymentMethod: PaymentMethod;
    cardInformations: PaymentCard;
  };
}
