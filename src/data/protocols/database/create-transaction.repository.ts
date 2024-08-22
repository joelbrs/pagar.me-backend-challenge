import { PaymentMethod, Transaction } from "@/domain/models";

export interface CreateTransactionRepository {
  createTransaction: (
    data: CreateTransactionRepository.Request
  ) => Promise<CreateTransactionRepository.Response>;
}

export namespace CreateTransactionRepository {
  export type Request = {
    value: number;
    description: string;
    paymentMethod: PaymentMethod;
    cardNumber: string;
    cardCarrierName: string;
    cardExpitarionDate: string;
    cardCvv: string;
    clientId: number;
  };

  export type Response = Transaction;
}
