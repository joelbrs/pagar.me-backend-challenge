import { GetBalanceController } from "@/presentation/controllers";
import { Controller, Validator } from "@/presentation/protocols";
import { makeGetBalance } from "../use-cases";
import { makeGetBalanceValidators } from "./validations";

export const makeGetBalanceController = (): Controller => {
  const validator = makeGetBalanceValidators();
  const getBalanceUseCase = makeGetBalance();

  return new GetBalanceController(validator, getBalanceUseCase);
};
