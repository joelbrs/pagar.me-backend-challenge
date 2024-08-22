import { DbGetBalance } from "@/data/use-cases";
import { GetBalance } from "@/domain/use-cases";
import { makeClientRepository } from "../repositories";

export const makeGetBalance = (): GetBalance => {
  const repository = makeClientRepository();

  return new DbGetBalance(repository);
};
