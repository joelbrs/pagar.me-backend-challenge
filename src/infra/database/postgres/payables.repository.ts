import { DatabaseException } from "@/presentation/exceptions";
import { PgHelper } from "./helpers";
import { CreatePayablesRepository } from "@/data/protocols/database";

export class PgPayablesRepository implements CreatePayablesRepository {
  async createPayables(data: CreatePayablesRepository.Request) {
    try {
      const { fee, paymentDate, status, clientId, transactionId } = data;

      const query = `--sql
          insert into payables 
              (status, payment_date, fee, clientId, transactionId)
          values
              ($1, $2, $3, $4, $5);
          returning *;
      `;

      const result = await PgHelper.client?.query(query, [
        status,
        paymentDate,
        fee,
        clientId,
        transactionId,
      ]);

      return result?.rows[0] as CreatePayablesRepository.Response;
    } catch (error) {
      throw new DatabaseException((error as Error).message);
    }
  }
}
