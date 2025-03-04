import { Component } from '@angular/core';
import { colors } from '../../../styles/colors';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  colors = colors;

}
