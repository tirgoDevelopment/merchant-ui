import { useAnimation } from "@angular/animations";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "environments/environment";

@Injectable({ providedIn: 'root' })

export class OrdersService {
  constructor(
    private http: HttpClient
  ) { }

  getOrders() {
    return this.http.get(env.apiOrders+'/orders/all');
  }
  getOrdersByMerchant(id: string, pag: { size: number, currentPage: number }, filter?: string, sortBy?: string, sortType?: string) {
    let url = `${env.apiOrders}/orders/clients/all-orders?userId=${id}&pageSize=${pag.size}&pageIndex=${pag.currentPage}`;
    if (filter) {
      url += `&${filter}`;
    }
    if (sortBy && sortType) {
      url += `&sortBy=${sortBy}&sortType=${sortType}`;
    }
    return this.http.get(url);
  }
  getOrderById(id) {
    return this.http.get(env.apiOrders + '/orders/clients/order-by-id?orderId=' + id);
  }
  createOrder(data) {
    return this.http.post(env.apiOrders + '/orders/clients',data)
  }
  acceptOffer(id) {
    // @ts-ignore
    return this.http.post(env.apiOrders + '/orders/clients/accept-offer?id='+id)
  }
  contrOffer(data) {
    return this.http.post(env.apiOrders + '/orders/clients/offer-price',data)
  }
}