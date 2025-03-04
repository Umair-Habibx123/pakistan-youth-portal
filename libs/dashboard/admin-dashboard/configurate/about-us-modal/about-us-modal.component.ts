import { Component, EventEmitter, Input, Output } from '@angular/core';
import { colors } from '../../../../styles/colors';

@Component({
  selector: 'app-about-us-modal',
  templateUrl: './about-us-modal.component.html',
  styleUrls: ['./about-us-modal.component.scss']
})
export class AboutUsModalComponent {
  colors = colors;

  @Input() isModalOpen = false; // Receive state from parent
  @Output() close = new EventEmitter<void>(); // Emit event to close modal

  closeModal() {
    this.close.emit(); // Notify parent
  }

}
