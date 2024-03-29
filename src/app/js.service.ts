// jsreport.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsReportService {
    private jsReportApiUrl = 'http://localhost:5488';

  constructor(private http: HttpClient) {}
  // Function to generate a report
  generarInforme(templateName: string, datos: any): Observable<any> {
    const url = `${this.jsReportApiUrl}/api/report`;
    const body = {
      "template": { name: templateName },
      "data": datos
    };


    console.log(body)

 
    try {
      return this.http.post(url, body, { responseType: 'arraybuffer' });
    } catch (error) {
      console.error('Error during report generation:', error);
      throw error;
    }
  }
getTemplates(): Observable<any> {
  const url = `${this.jsReportApiUrl}/odata/templates?$select=name,content`;

  return this.http.get(url);
}

}
