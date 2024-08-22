import { InvalidParamException } from "@/presentation/exceptions/invalid-param.exception";
import { Validator } from "@/presentation/protocols";

export class CurrencyFieldValidator implements Validator {
  constructor(private readonly fieldName: string) {}

  validate(input: any) {
    if (!Number(input[this.fieldName]) || Number(input[this.fieldName]) < 0) {
      return new InvalidParamException(this.fieldName);
    }
  }
}
