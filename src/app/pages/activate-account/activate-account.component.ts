import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRestService } from 'src/app/services/services';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent {

  message = '';
  isOkay = true;
  submitted = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationRestService
  ) {}

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  activationAccount() {
    throw new Error('Method not implemented.');
  }

  private confirmAccount(token: string) {
    this.authenticationService.confirm({
      token
    }).subscribe({
      next: () => {
        this.message = 'Your account has been successfully activated';
        this.submitted = true;
        this.isOkay = true;
      },
      error: () => {
        this.message = 'Token has been expired or invalid';
        this.submitted = true;
        this.isOkay = false;
      }
    });
  }

}
