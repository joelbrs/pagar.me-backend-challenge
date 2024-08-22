import { GetBalanceRepository } from "@/data/protocols/database";
import { PgHelper } from "./helpers";
import { DatabaseException } from "@/presentation/exceptions";

export class PgClientRepository implements GetBalanceRepository {
  async getBalance({ clientId }: GetBalanceRepository.Request) {
    try {
      const query = `--sql
            select 
                round(
                    sum(case when p.status = 'paid' then (1 - p.fee) * t.amount else 0 end), 2
                ) as available,
                round(
                    sum(case when p.status = 'waiting_funds' then (1 - p.fee) * t.amount else 0 end), 2
                ) as waiting_funds
            from 
                payables p 
            inner join 
                transactions t on t.id = p.transactionid 
            inner join 
                clients c on c.id = t.clientid 
            where 
                p.clientid = $1
        `;

      const result = await PgHelper.client?.query(query, [clientId]);
      return result?.rows[0] as GetBalanceRepository.Response;
    } catch (error) {
      console.error(error as Error);
      throw new DatabaseException((error as Error).message);
    }
  }
}
