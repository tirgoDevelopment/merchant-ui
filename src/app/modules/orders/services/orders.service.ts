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
    return this.http.get(env.apiUrl+'/orders/all');
  }
  getOrdersByMerchant(id: string, pag: { size: number, currentPage: number }, filter?: string, sortBy?: string, sortType?: string) {
    let url = `${env.apiUrl}/orders/clients/all-orders?userId=${id}&pageSize=${pag.size}&pageIndex=${pag.currentPage}`;
    if (filter) {
      url += `&${filter}`;
    }
    if (sortBy && sortType) {
      url += `&sortBy=${sortBy}&sortType=${sortType}`;
    }
    return this.http.get(url);
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