import { Client } from "pg";

type PgConnection = {
  host: string;
  password: string;
  port: number;
  user: string;
};

export const PgHelper = {
  client: null as null | Client,
  connection: {} as PgConnection,

  async connect({ host, password, port, user }: PgConnection) {
    this.client = new Client({ host, password, port, user });
  },
};
