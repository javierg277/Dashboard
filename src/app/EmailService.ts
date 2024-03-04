import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) { }

  sendEmail(file:Blob) {
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, "Report.pdf")
    

    let options  = {
      headers: new HttpHeaders().append('Content-Type', 'multipart/form-data'),
     /* headers: new HttpHeaders().append('Accept', 'application/json')*/
    }

    return this.http.post('http://localhost:5188/SendEmail', formData,options);
  }
}