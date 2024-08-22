import { GetTransactionsRepository } from "@/data/protocols/database";
import { GetTransactions } from "@/domain/use-cases";
import { PgHelper } from "./helpers";

export class PgClientRepository implements GetTransactionsRepository {
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
}
