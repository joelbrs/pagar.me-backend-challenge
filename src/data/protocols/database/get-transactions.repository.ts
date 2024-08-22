import { Transaction } from "@/domain/models";

export interface GetTransactionsRepository {
  getTransactions: (
    data: GetTransactionsRepository.Request
  ) => Promise<GetTransactionsRepository.Response>;
}

export namespace GetTransactionsRepository {
  export type Request = {
    clientId: number;
  };

  export type Response = Transaction[];
}
