import { Component } from '@angular/core';
import { colors } from '../../../styles/colors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-screen',
  templateUrl: './forgot-screen.component.html',
  styleUrls: ['./forgot-screen.component.scss']
})
export class ForgotScreenComponent {

  colors = colors;
  email: string = '';

  constructor(private router: Router) { } // Inject Router

  validateForm(): boolean {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      alert('Invalid Email Address');
      return false;
    }
    return true;
  }

  onSendCode(): void {
    if (this.validateForm()) {
      this.router.navigate(['/entercode']);
    } else {

    }
  }


}
