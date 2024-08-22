import { ProcessTransactionController } from "@/presentation/controllers";
import { Controller, Validator } from "@/presentation/protocols";
import { makeCreateTransaction } from "../use-cases";

export const makeProcessTransactionController = (): Controller => {
  class ValidatorStub implements Validator {
    validate(_: any) {
      return new Error();
    }
  }

  const validator = new ValidatorStub();
  const createTransaction = makeCreateTransaction();

  return new ProcessTransactionController(validator, createTransaction);
};
