import { Payable, PayableStatus } from "@/domain/models";
import { CreatePayables } from "@/domain/use-cases";

export interface CreatePayablesRepository {
  createPayables: (
    data: CreatePayablesRepository.Request
  ) => Promise<CreatePayablesRepository.Response>;
}

export namespace CreatePayablesRepository {
  export type Request = CreatePayables.Request & {
    status: PayableStatus;
    paymentDate: Date;
    fee: number;
  };

  export type Response = Payable;
}
