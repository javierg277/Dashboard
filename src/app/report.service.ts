import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getReportById(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:5188/Cliente/Get Report/${id}`);
  }

  getReportsCrit(reportId: string): Observable<any> {
  
    return this.http.get(`http://localhost:5188/Cliente/Get ReportCrit?id=${reportId}`);
  }
}