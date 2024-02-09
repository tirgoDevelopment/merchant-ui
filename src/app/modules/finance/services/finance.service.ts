import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "environments/environment";

@Injectable({ providedIn: 'root' })

export class FinanceService {
  constructor(
    private http: HttpClient
  ) { }
  
  getAll(userId) {
    return this.http.get(env.financeApiUrl+'/finance/transaction/merchant-transactions?userId='+userId);
  }
  
  create(data) {
    return this.http.post(env.financeApiUrl+'/finance/transaction',data);
  }
}