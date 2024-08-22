import { PgPayablesRepository } from "@/infra/database/postgres";

export const makePayableRepository = () => {
  return new PgPayablesRepository();
};
