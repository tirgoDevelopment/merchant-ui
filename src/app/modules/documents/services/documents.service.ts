import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "environments/environment";

@Injectable({ providedIn: 'root' })

export class DocumentsService {
  constructor(
    private http: HttpClient
  ) { }

  
}