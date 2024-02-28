import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "environments/environment";

@Injectable({ providedIn: 'root' })

export class FinanceService {
  constructor(
    private http: HttpClient
  ) { }
  
  getAll(user,pageSize, pageIndex ) {
    return this.http.get(env.financeApiUrl+'/finance/transaction/merchant-transactions?userId='+user.userId+'&pageSize='+pageSize+'&pageIndex='+pageIndex);
  }
  create(data) {
    return this.http.post(env.financeApiUrl+'/finance/transaction',data);
  }
  getBalance(id) {
    return this.http.get(env.financeApiUrl+'/finance/transaction/merchant-balance?merchantId='+id);
  }
}