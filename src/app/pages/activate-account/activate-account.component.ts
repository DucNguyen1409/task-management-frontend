import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRestService } from 'src/app/services/services';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent {
activationAccount() {
throw new Error('Method not implemented.');
}

  message = '';
  isOkay = true;
  submitted = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationRestService
  ) {}

  onCodeCompleted(token: string) {

  }
}
