import { GetTransactions } from "@/domain/use-cases";
import { GetTransactionsRepository } from "../protocols/database";

export class DbGetTransactions implements GetTransactions {
  constructor(
    private readonly getTransactionsRepository: GetTransactionsRepository
  ) {}

  async get({ clientId }: GetTransactions.Request) {
    return this.getTransactionsRepository.getTransactions({ clientId });
  }
}
