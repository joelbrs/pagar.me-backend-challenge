import { PgTransactionRepository } from "@/infra/database/postgres";

export const makeTransactionRepository = () => {
  return new PgTransactionRepository();
};
