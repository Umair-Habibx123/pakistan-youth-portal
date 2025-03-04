import { Component } from '@angular/core';
import { colors } from '../../styles/colors';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  colors = colors;

}
