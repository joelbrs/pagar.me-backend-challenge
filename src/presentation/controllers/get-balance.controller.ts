import { GetBalance } from "@/domain/use-cases";
import { Controller, HttpRequest, Validator } from "../protocols";
import { badRequest, ok, serverError } from "../helpers";

export class GetBalanceController implements Controller {
  constructor(
    private readonly validator: Validator,
    private readonly getBalance: GetBalance
  ) {}

  async handle(httpRequest: HttpRequest) {
    try {
      const error = this.validator.validate(httpRequest.params);

      if (error) {
        return badRequest(error);
      }

      const { clientId } = httpRequest.params as GetBalanceController.Request;

      const balance = await this.getBalance.get({ clientId });
      return ok(balance);
    } catch {
      return serverError();
    }
  }
}

export namespace GetBalanceController {
  export type Request = {
    clientId: number;
  };
}
