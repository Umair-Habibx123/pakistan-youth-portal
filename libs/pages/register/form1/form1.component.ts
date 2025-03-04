import { Component, EventEmitter, Output } from '@angular/core';
import { colors } from '../../../styles/colors';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component {
  colors = colors;
  @Output() nextStep = new EventEmitter<void>();

  goToNext() {
    this.nextStep.emit();
  }
}
