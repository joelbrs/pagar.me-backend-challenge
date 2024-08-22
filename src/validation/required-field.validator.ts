import { MissingParamException } from "@/presentation/exceptions";
import { Validator } from "@/presentation/protocols";

export class RequiredFieldValidator implements Validator {
  constructor(private readonly fieldName: string) {}

  validate(input: any) {
    if (!input[this.fieldName]) {
      return new MissingParamException(this.fieldName);
    }
  }
}
