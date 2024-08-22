import { GetBalance } from "@/domain/use-cases";
import { Controller, HttpRequest, Validator } from "../protocols";
import { badRequest, ok } from "../helpers";

export class GetBalanceController implements Controller {
  constructor(
    private readonly validator: Validator,
    private readonly getBalance: GetBalance
  ) {}

  async handle(httpRequest: HttpRequest) {
    const error = this.validator.validate(httpRequest.params);

    if (error) {
      return badRequest(error);
    }

    const { clientId } = httpRequest.params as GetBalanceController.Request;

    const balance = await this.getBalance.get({ clientId });
    return ok(balance);
  }
}

export namespace GetBalanceController {
  export type Request = {
    clientId: number;
  };
}
