import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})
export class RegisterComponent {
  username!: string; 
  password!: string; 
  profileId!: number;
  constructor(private http: HttpClient,private router: Router) {}



  register() {
    if (!this.username || !this.password || !this.profileId) {
      alert('Por favor, rellene todos los campos.');
      return;
    }
    const url = 'http://localhost:5188/api/User/register';
    const body = { username: this.username, password: this.password, Profile_Id: this.profileId };
    console.log(body);
    this.router.navigate(['/login']);
    this.http.post(url, body).subscribe(response => {
      // Haz algo con la respuesta aquí
      console.log(this.password);
    
    }, error => {
      // Maneja el error aquí
      console.error(error);
    });
  }
 
  }

