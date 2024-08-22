import { ProcessTransactionController } from "@/presentation/controllers";
import { Transaction } from "../models";

export interface CreateTransaction {
  create: (
    data: CreateTransaction.Request
  ) => Promise<CreateTransaction.Response>;
}

export namespace CreateTransaction {
  export type Request = ProcessTransactionController.Request;

  export type Response = Transaction[];
}
