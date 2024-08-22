import { Payable, PayableStatus } from "@/domain/models";
import { CreatePayables } from "@/domain/use-cases";

export interface CreatePayablesRepository {
  createPayables: (
    data: CreatePayablesRepository.Request
  ) => Promise<CreatePayablesRepository.Response>;
}

export namespace CreatePayablesRepository {
  export type Request = Omit<CreatePayables.Request, "paymentMethod"> & {
    status: PayableStatus;
    paymentDate: Date;
    fee: number;
    clientId: number;
  };

  export type Response = Payable;
}
