export interface GetBalance {
  get: (data: GetBalance.Request) => Promise<GetBalance.Response>;
}

export namespace GetBalance {
  export type Request = {
    clientId: number;
  };

  export type Response = {
    available: number;
    waiting_funds: number;
  };
}
