import { PgClientRepository } from "@/infra/database/postgres";

export const makeClientRepository = () => {
  return new PgClientRepository();
};
