import { CreateTransaction, GetTransactions } from "@/domain/use-cases";
import { CreateTransactionRepository } from "../protocols/database";

export class DbCreateTransaction implements CreateTransaction {
  constructor(
    private readonly createTransactionRepository: CreateTransactionRepository,
    private readonly getTransactionsUseCase: GetTransactions
  ) {}

  async create({
    cardInformations,
    clientId,
    description,
    paymentMethod,
    value,
  }: CreateTransaction.Request) {
    await this.createTransactionRepository.createTransaction({
      value,
      description,
      paymentMethod,
      clientId,
      cardCarrierName: cardInformations.carrierName,
      cardCvv: cardInformations.cvv,
      cardExpitarionDate: cardInformations.expirationDate,
      cardNumber: cardInformations.cardNumber,
    });

    return await this.getTransactionsUseCase.get({ clientId });
  }
}
