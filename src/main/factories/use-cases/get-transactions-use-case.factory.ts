import { DbGetTransactions } from "@/data/use-cases";
import { GetTransactions } from "@/domain/use-cases";
import { makeTransactionRepository } from "../repositories";

export const makeGetTransactions = (): GetTransactions => {
  const repository = makeTransactionRepository();

  return new DbGetTransactions(repository);
};
