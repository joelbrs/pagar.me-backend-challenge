import {
  CreateTransactionRepository,
  GetTransactionsRepository,
} from "@/data/protocols/database";
import { PgHelper } from "./helpers";

export class PgTransactionRepository
  implements GetTransactionsRepository, CreateTransactionRepository
{
  async getTransactions({ clientId }: GetTransactionsRepository.Request) {
    const query = `--sql
        select 
            t.id, t.amount, t.description, t.payment_method, t.created_at, c.* 
        from transactions t 
            inner join 
                clients c on c.id = t.clientid 
        where 
            t.clientid = $1
        order by 
            t.created_at 
    `;

    const result = await PgHelper.client?.query(query, [clientId]);
    return result?.rows[0] as GetTransactionsRepository.Response;
  }

  async createTransaction({
    cardCarrierName,
    cardCvv,
    cardExpitarionDate,
    cardNumber,
    clientId,
    description,
    paymentMethod,
    value,
  }: CreateTransactionRepository.Request) {
    const query = `--sql
        insert into transactions 
            (amount, description, payment_method, card_number, card_holder_name, card_expiration_date, card_cvv, clientId)
        values 
            ($1, $2, $3, $4, $5, $6, $7, $8),
        returning *;
    `;

    const result = await PgHelper.client?.query(query, [
      value,
      description,
      paymentMethod,
      cardNumber,
      cardCarrierName,
      cardExpitarionDate,
      cardCvv,
      clientId,
    ]);
    return result?.rows[0] as CreateTransactionRepository.Response;
  }
}
