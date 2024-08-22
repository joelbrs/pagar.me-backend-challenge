import { Validator } from "@/presentation/protocols";
import { RequiredFieldValidator, ValidatorComposite } from "@/validation";

export const makeGetBalanceValidators = (): Validator => {
  const validators: Validator[] = [];

  for (const field of ["clientId"]) {
    validators.push(new RequiredFieldValidator(field));
  }

  return new ValidatorComposite(validators);
};
