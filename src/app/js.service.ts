// jsreport.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsReportService {
    private jsReportApiUrl = 'http://localhost:5488/api/report';

  constructor(private http: HttpClient) {}

 generarInforme(datos: any): Observable<any> {
  return this.http.post(this.jsReportApiUrl, datos, { responseType: 'arraybuffer' });
}
}
