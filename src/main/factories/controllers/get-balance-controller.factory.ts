import { GetBalanceController } from "@/presentation/controllers";
import { Controller, Validator } from "@/presentation/protocols";
import { makeGetBalance } from "../use-cases";

export const makeGetBalanceController = (): Controller => {
  class ValidatorStub implements Validator {
    validate(_: any) {
      return new Error();
    }
  }

  const validator = new ValidatorStub();
  const getBalanceUseCase = makeGetBalance();

  return new GetBalanceController(validator, getBalanceUseCase);
};
