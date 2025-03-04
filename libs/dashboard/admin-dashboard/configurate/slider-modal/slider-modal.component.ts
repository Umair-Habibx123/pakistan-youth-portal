import { Component, EventEmitter, Input, Output } from '@angular/core';
import { colors } from '../../../../styles/colors';
@Component({
  selector: 'app-slider-modal',
  templateUrl: './slider-modal.component.html',
  styleUrls: ['./slider-modal.component.scss']
})
export class SliderModalComponent {
  colors = colors;
  @Input() isModalOpen = false; // Receive state from parent
  @Output() close = new EventEmitter<void>(); // Emit event to close modal

  closeModal() {
    this.close.emit(); // Notify parent
  }
}
