import { GetBalance } from "@/domain/use-cases";
import { GetBalanceRepository } from "../protocols/database";

export class DbGetBalance implements GetBalance {
  constructor(private readonly getBalanceRepository: GetBalanceRepository) {}

  async get(data: GetBalance.Request) {
    return this.getBalanceRepository.getBalance(data);
  }
}
