import { PaymentMethod } from "../models";

export interface CreatePayables {
  create: (data: CreatePayables.Request) => Promise<CreatePayables.Response>;
}

export namespace CreatePayables {
  export type Request = {
    value: number;
    paymentMethod: PaymentMethod;
  };

  export type Response = {
    payableId: number;
  };
}
