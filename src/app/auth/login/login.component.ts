import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login(event: Event): void {
     event.preventDefault();
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log(response);

        if (response && response.headers) {
          const authToken = response.headers.get('Authorization');
          console.log('Token recibido:', authToken);
        } else {
          console.error('La respuesta del servidor o las cabeceras son nulas.');
        }
      },
      (error) => {
        console.error('Error de inicio de sesión:', error);
      }
    );
  }
}
