import { Component } from '@angular/core';
import { colors } from '../../../styles/colors';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.scss']
})
export class EnterCodeComponent {
  colors=colors;
  moveToNext(event: any, nextInputId: string) {
    

    const input = event.target;


    if (input.value.length === 1) {

      if (nextInputId) {
        const nextInput = document.getElementById(nextInputId) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  }
}
