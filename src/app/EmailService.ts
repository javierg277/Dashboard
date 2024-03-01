import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) { }

  sendEmail() {
    return this.http.post('http://localhost:5188/SendEmail', {});
  }
}