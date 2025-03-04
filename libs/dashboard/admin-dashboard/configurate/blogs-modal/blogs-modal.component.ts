import { Component, EventEmitter, Input, Output } from '@angular/core';
import { colors } from '../../../../styles/colors';


@Component({
  selector: 'app-blogs-modal',
  templateUrl: './blogs-modal.component.html',
  styleUrls: ['./blogs-modal.component.scss']
})
export class BlogsModalComponent {
  colors = colors;
  @Input() isModalOpen = false; // Receive state from parent
  @Output() close = new EventEmitter<void>(); // Emit event to close modal

  closeModal() {
    this.close.emit(); // Notify parent
  }

}
