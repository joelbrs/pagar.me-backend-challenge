import {
  CreatePayables,
  CreateTransaction,
  GetTransactions,
} from "@/domain/use-cases";
import { CreateTransactionRepository } from "../protocols/database";
import { ServerErrorException } from "@/presentation/exceptions";

export class DbCreateTransaction implements CreateTransaction {
  constructor(
    private readonly createTransactionRepository: CreateTransactionRepository,
    private readonly getTransactionsUseCase: GetTransactions,
    private readonly createPayablesUseCase: CreatePayables
  ) {}

  async create({
    cardInformations,
    clientId,
    description,
    paymentMethod,
    value,
  }: CreateTransaction.Request) {
    try {
      const { id: transactionId } =
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

      await this.createPayablesUseCase.create({
        clientId,
        paymentMethod,
        transactionId,
      });
      return await this.getTransactionsUseCase.get({ clientId });
    } catch {
      throw new ServerErrorException();
    }
  }
}
