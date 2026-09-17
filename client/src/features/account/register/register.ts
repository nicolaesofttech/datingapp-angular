import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { RegisterCreds } from '../../../types/user';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private accountService = inject(AccountService);
  cancellRegister = output<boolean>();
  protected creds = {} as RegisterCreds;

  register() {
    this.accountService.register(this.creds).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: error => console.error(error)
    });
  }

  cancel() {
    this.cancellRegister.emit(false);
  }
}
