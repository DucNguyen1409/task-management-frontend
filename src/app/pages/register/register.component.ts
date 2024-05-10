import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequestDto, RegisterRequestDto } from 'src/app/services/models';
import { AuthenticationRestService } from 'src/app/services/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userRole: string[] = ['User', 'Admin'];
  registerRequest: RegisterRequestDto = {email: '', name: '', role: '', password: ''};
  errorMsg: Array<string> = [];
  registerMsg: Array<string> = [];
  selectedRole: string = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationRestService
  ) {
    this.selectedRole = this.userRole[0];
  }

  login() {
    this.router.navigate(['login'])
  }

  register() {
    // select user role
    this.registerRequest.role = this.selectedRole;
    
    this.errorMsg = [];
    this.authenticationService.register({
      body: this.registerRequest
    }).subscribe({
      next: () => {
        this.router.navigate(['activation-account']);
      },
      error: (err) => {
        this.errorMsg = err.error.message;
      }
    })
  }
}
