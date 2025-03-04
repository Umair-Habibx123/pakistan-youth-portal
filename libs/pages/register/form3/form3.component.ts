import { Component, EventEmitter, Output } from '@angular/core';
import { colors } from '../../../styles/colors';
@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component {
  colors = colors;
  @Output() nextStep = new EventEmitter<void>();

  goToNext() {
    alert("Registration Completed!");
    this.nextStep.emit();
  }
}
