type Props = {
  cardNumber: string;
  carrierName: string;
  expirationDate: Date;
  cvv: string;
};

export class PaymentCard {
  private readonly props: Props;

  constructor(props: Props) {
    this.validate(props);
    this.props = props;
  }

  get cardNumber(): string {
    return this.props.cardNumber?.trim().replace(/\s/g, "").slice(12);
  }

  get carrierName(): string {
    return this.props?.carrierName;
  }

  get expirationDate(): string {
    return this.props.expirationDate.toISOString();
  }

  get cvv(): string {
    return this.props.cvv;
  }

  validate({ cardNumber, cvv, carrierName, expirationDate }: Props) {
    const isPropsValid =
      this.validateCardNumber(cardNumber) &&
      this.validateCvv(cvv) &&
      this.validateCarrierName(carrierName) &&
      this.validateExpirationDate(expirationDate);

    if (!isPropsValid) {
      throw new Error("Payment Card Informations are invalid.");
    }
  }

  validateCardNumber(cardNumber: string) {
    return cardNumber?.trim().replace(/\s/g, "").length === 16;
  }

  validateCvv(cvv: string) {
    return cvv?.trim().replace(/\s/g, "").length === 3;
  }

  validateCarrierName(carrierName: string) {
    return carrierName.length;
  }

  validateExpirationDate(expirationDate: Date) {
    const currentDate = new Date();

    currentDate.setHours(0, 0, 0, 0);
    return currentDate > expirationDate;
  }
}
