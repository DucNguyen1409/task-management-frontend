import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequestDto, AuthenticationResponseDto } from 'src/app/services/models';
import { AuthenticationRestService } from 'src/app/services/services';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authRequest: AuthenticationRequestDto = {email: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationRestService,
    private tokenService: TokenService
  ) {}

  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res: AuthenticationResponseDto) => {
        // save token
        this.tokenService.token = res.access_token as string;

        // this.router.navigate(['tasks']);
      },
      error: (err) => {
        if (err.error.message) {
          this.errorMsg = err.error.message;
        } else {
          this.errorMsg.push(err.error.errorMsg);
        }
      }
    });
  }

  register() {
    this.router.navigate(['register']);
  }

}
