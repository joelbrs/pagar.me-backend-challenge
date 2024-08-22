import { Validator } from "@/presentation/protocols";

export class ValidatorComposite implements Validator {
  constructor(private readonly validators: Validator[]) {}

  validate(input: any) {
    for (const validator of this.validators) {
      const error = validator.validate(input);
      if (error) {
        return error;
      }
    }
  }
}
