import { Transaction } from "../models";

export interface GetTransactions {
  get: (data: GetTransactions.Request) => Promise<GetTransactions.Response>;
}

export namespace GetTransactions {
  export type Request = {
    clientId: number;
  };

  export type Response = Transaction[];
}
