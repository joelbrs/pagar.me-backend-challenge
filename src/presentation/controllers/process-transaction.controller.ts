import { PaymentMethod } from "@/domain/models";
import { badRequest, ok } from "../helpers";
import { Controller, HttpRequest, HttpResponse, Validator } from "../protocols";
import { PaymentCard } from "@/domain/value-objects";
import { CreatePayables } from "@/domain/use-cases";

export class ProcessTransactionController implements Controller {
  constructor(
    private readonly validator: Validator,
    private createPayables: CreatePayables
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validator.validate(httpRequest.body);

    if (error) {
      return badRequest(error);
    }

    const { value, paymentMethod } =
      httpRequest.body as ProcessTransaction.Request;

    await this.createPayables.create({ value, paymentMethod });
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
