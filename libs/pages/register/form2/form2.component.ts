import {  Component, EventEmitter, Output  } from '@angular/core';
import { colors } from '../../../styles/colors';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component {
  colors = colors;
  @Output() nextStep = new EventEmitter<void>();

  goToNext() {
    this.nextStep.emit();
  }
}
