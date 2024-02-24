import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable({ providedIn: 'root' })

export class DocumentsService {
  constructor(
    private http: HttpClient
  ) { }

  getFile(fileName: string): Observable<string> {
    return this.http.get(`http://192.168.1.218:3002/api/v2/references/files/client_merchant/${fileName}`, { responseType: 'blob' })
      .pipe(
        map((blob: Blob) => {
          return URL.createObjectURL(blob);
        })
      );
  }
}