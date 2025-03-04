import { Component, EventEmitter, Output } from '@angular/core';
import { colors } from '../../../styles/colors';

@Component({
  selector: 'app-configurate',
  templateUrl: './configurate.component.html',
  styleUrls: ['./configurate.component.scss']
})
export class ConfigurateComponent {



  @Output() tabChanged = new EventEmitter<number>();
  colors = colors;

  isModalOpen = false;
  selectedTraning: any = null;

  openModal(tabIndex: number) {
    this.selectedModal = tabIndex;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }


  tabs = ['Hero Slider', 'Blogs', 'About Us'];
  selectedTab = 0;
  selectedModal = 0;


  selectTab(index: number) {
    this.selectedTab = index;
    this.tabChanged.emit(index);
  }

}
