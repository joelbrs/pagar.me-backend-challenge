import { CreatePayables } from "@/domain/use-cases";
import { CreatePayablesRepository } from "../protocols/database";

export class DbCreatePayables implements CreatePayables {
  private readonly DEFAULT_CREDIT_FEE: number = 0.05;
  private readonly DEFAULT_DEBIT_FEE: number = 0.03;

  constructor(
    private readonly createPayablesRepository: CreatePayablesRepository
  ) {}

  async create({ paymentMethod, value }: CreatePayables.Request) {
    const isCreditCard = paymentMethod === "credit_card";

    const payable = await this.createPayablesRepository.createPayables({
      paymentMethod,
      value,
      status: isCreditCard ? "waiting_funds" : "paid",
      paymentDate: this.calculatePaymentDate(!isCreditCard),
      fee: isCreditCard ? this.DEFAULT_CREDIT_FEE : this.DEFAULT_DEBIT_FEE,
    });

    return {
      payableId: payable.id,
    };
  }

  calculatePaymentDate(isToday: boolean): Date {
    if (!isToday) {
      const DAYS_TO_BE_ADDED = 30;

      const paymentDate = new Date();
      paymentDate.setDate(paymentDate.getDate() + DAYS_TO_BE_ADDED);

      return paymentDate;
    }

    return new Date();
  }
}
