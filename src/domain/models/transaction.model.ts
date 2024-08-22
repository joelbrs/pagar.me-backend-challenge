import { Client } from "./client.model";

export type Transaction = {
  id: number;
  amount: number;
  description: string;
  payment_method: string;
  createdAt: string;
  client: Client;
};
