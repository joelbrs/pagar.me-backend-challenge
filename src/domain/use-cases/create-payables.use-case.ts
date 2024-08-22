import { PaymentMethod } from "../models";

export interface CreatePayables {
  create: (data: CreatePayables.Request) => Promise<CreatePayables.Response>;
}

export namespace CreatePayables {
  export type Request = {
    paymentMethod: PaymentMethod;
    clientId: number;
    transactionId: number;
  };

  export type Response = {
    payableId: number;
  };
}
