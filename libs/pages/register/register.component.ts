import { Component } from '@angular/core';
import { colors } from '../../styles/colors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  colors = colors;
  currentStep = 1;

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }
}
