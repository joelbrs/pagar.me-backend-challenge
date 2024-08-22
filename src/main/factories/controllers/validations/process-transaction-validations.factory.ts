import { Validator } from "@/presentation/protocols";
import {
  CurrencyFieldValidator,
  RequiredFieldValidator,
  ValidatorComposite,
} from "@/validation";

export const makeProcessTransactionValidations = (): Validator => {
  const validators: Validator[] = [];

  for (const field of [
    "clientId",
    "value",
    "description",
    "paymentMethod",
    "cardInformations",
  ]) {
    validators.push(new RequiredFieldValidator(field));
  }
  validators.push(new CurrencyFieldValidator("value"));
  return new ValidatorComposite(validators);
};
