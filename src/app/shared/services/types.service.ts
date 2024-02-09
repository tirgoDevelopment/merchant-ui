import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "environments/environment";

@Injectable({ providedIn: 'root' })

export class TypesService {

  constructor(private http: HttpClient) { }

  getTransportTypes() {
    return this.http.get(env.referencesApiUrl + '/references/transport-types/all');
  }
  getTransportKinds() {
    return this.http.get(env.referencesApiUrl + '/references/transport-kinds/all');
  }
  getCargoTypes() {
    return this.http.get(env.referencesApiUrl + '/references/cargo-type-groups/all');
  }
  getCurrencies() {
    return this.http.get(env.referencesApiUrl + '/references/currencies/all');
  }
  getPackages() {
    return this.http.get(env.referencesApiUrl + '/references/cargo-packages/all');
  }
  getCargoLoadingMethod() {
    return this.http.get(env.referencesApiUrl + '/references/cargo-loading-method/all');
  }
}