import { DbCreateTransaction } from "@/data/use-cases";
import { CreateTransaction } from "@/domain/use-cases";
import { makeTransactionRepository } from "../repositories";
import { makeGetTransactions } from "./get-transactions-use-case.factory";
import { makeCreatePayables } from "./create-payables-use-case.factory";

export const makeCreateTransaction = (): CreateTransaction => {
  const createTransactionRepository = makeTransactionRepository();
  const getTransactionsUseCase = makeGetTransactions();
  const createPayablesUseCase = makeCreatePayables();

  return new DbCreateTransaction(
    createTransactionRepository,
    getTransactionsUseCase,
    createPayablesUseCase
  );
};
