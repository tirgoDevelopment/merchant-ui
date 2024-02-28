import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "environments/environment";

@Injectable({ providedIn: 'root' })

export class OrdersService {
  constructor(
    private http: HttpClient
  ) { }

  getOrders() {
    return this.http.get(env.apiUrl+'/orders/all');
  }
  getOrdersByMerchant(id,pageSize,pageIndex) {
    return this.http.get(env.apiUrl + '/orders/clients/all-orders?userId=' + id+'&pageSize='+pageSize+'&pageIndex='+pageIndex);
  }
  getOrderById(id) {
    return this.http.get(env.apiUrl + '/orders/clients/order-by-id?orderId=' + id);
  }
  createOrder(data) {
    return this.http.post(env.apiUrl + '/orders/clients',data)
  }
  acceptOffer(id) {
    // @ts-ignore
    return this.http.post(env.apiUrl + '/orders/clients/accept-offer?id='+id)
  }
  contrOffer(data) {
    return this.http.post(env.apiUrl + '/orders/clients/offer-price',data)
  }
}