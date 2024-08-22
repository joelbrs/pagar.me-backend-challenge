import { ProcessTransactionController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeCreateTransaction } from "../use-cases";
import { makeProcessTransactionValidations } from "./validations/process-transaction-validations.factory";

export const makeProcessTransactionController = (): Controller => {
  const validator = makeProcessTransactionValidations();
  const createTransaction = makeCreateTransaction();

  return new ProcessTransactionController(validator, createTransaction);
};
