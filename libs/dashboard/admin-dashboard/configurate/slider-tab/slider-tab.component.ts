
import { Component, EventEmitter, Output } from '@angular/core';
import { colors } from '../../../../styles/colors';

@Component({
  selector: 'app-slider-tab',
  templateUrl: './slider-tab.component.html',
  styleUrls: ['./slider-tab.component.scss']
})
export class SliderTabComponent {
  colors = colors;

  @Output() addNewSlider = new EventEmitter<void>();

  slides = [
    { logo: '../../../assets/images/slider.jpeg' },
    { logo: '../../../assets/images/slider.jpeg' },
    { logo: '../../../assets/images/slider.jpeg' },
    { logo: '../../../assets/images/slider.jpeg' },
  ];

  openModal() {
    this.addNewSlider.emit();
  }
}