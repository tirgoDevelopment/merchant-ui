import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "environments/environment";

@Injectable({ providedIn: 'root' })

export class OrdersService {
  constructor(
    private http: HttpClient
  ) { }

  getOrders() {
    return this.http.get(env.orderApiUrl+'/orders/all');
  }
  getOrdersByMerchant(id) {
    return this.http.get(env.orderApiUrl + '/orders/clients/all-orders?userId=' + id);
  }
  getOrderById(id) {
    return this.http.get(env.orderApiUrl + '/orders/clients/order-by-id?orderId=' + id);
  }
  createOrder(data) {
    return this.http.post(env.orderApiUrl + '/orders/clients',data)
  }
  acceptOffer(id) {
    // @ts-ignore
    return this.http.post(env.orderApiUrl + '/orders/clients/accept-offer?id='+id)
  }
  contrOffer(data) {
    return this.http.post(env.orderApiUrl + '/orders/clients/offer-price',data)
  }
}