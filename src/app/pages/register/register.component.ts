import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequestDto } from 'src/app/services/models';
import { AuthenticationRestService } from 'src/app/services/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userRole: string[] = ['User', 'Admin'];
  registerRequest: AuthenticationRequestDto = {email: '', name: '', role: 'User', password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationRestService
  ) {}

  login() {
    this.router.navigate(['login'])
  }

  register() {
    console.log(this.registerRequest);
    this.errorMsg = [];
    this.authenticationService.register({
      body: this.registerRequest
    }).subscribe({
      next: () => {
        this.router.navigate(['activate-account']);
      },
      error: (err) => {
        this.errorMsg = err.error.validationErrors;
      }
    })
  }
}
