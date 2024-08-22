export type Payable = {
  id: number;
  transactionId: number;
  status: string;
  amount: number;
  fee: number;
  createdAt: Date;
};

export type PayableStatus = "paid" | "waiting_funds";
