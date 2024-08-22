import { DbCreatePayables } from "@/data/use-cases";
import { CreatePayables } from "@/domain/use-cases";
import { makePayableRepository } from "../repositories";

export const makeCreatePayables = (): CreatePayables => {
  const repository = makePayableRepository();

  return new DbCreatePayables(repository);
};
