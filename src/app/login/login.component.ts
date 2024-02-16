import { Component } from '@angular/core';
import { AuthService } from '../authService.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { } 
  login() {
    this.authService.login(this.name, this.password).subscribe(
      data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          // Luego puedes redirigir al usuario a la siguiente pantalla
          localStorage.setItem('name', this.name);
          this.router.navigate(['/home']);
        }
      },
      error => {
        
        alert('Error al iniciar sesión: Usuario no autorizado');
      }
    );
  }
}