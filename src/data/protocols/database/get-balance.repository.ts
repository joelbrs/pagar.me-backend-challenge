export interface GetBalanceRepository {
  getBalance: (
    data: GetBalanceRepository.Request
  ) => Promise<GetBalanceRepository.Response>;
}

export namespace GetBalanceRepository {
  export type Request = {
    clientId: number;
  };

  export type Response = {
    available: number;
    waiting_funds: number;
  };
}
