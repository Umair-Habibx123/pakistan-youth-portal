import { Component } from '@angular/core';

import { colors } from '../../../styles/colors';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {
  colors = colors;
  services = [
    {
      title: 'Business',
      description: 'Lorem ipsum dolor sit amet consectetur. Ac id eu vulputate egestas rutrum duis. Venenatis vestibulum elementum id tempus pretium morbi laoreet sapien diam.',
      iconColor: 'green',
      iconPath: 'M3 10h11M9 21v-6M12 15v6m-7-6v6m10 0h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3m0-10h3a2 2 0 012 2v3a2 2 0 01-2 2h-3'
    },
    {
      title: 'Education',
      description: 'Lorem ipsum dolor sit amet consectetur. Ac id eu vulputate egestas rutrum duis. Venenatis vestibulum elementum id tempus pretium morbi laoreet sapien diam.',
      iconColor: 'blue',
      iconPath: 'M12 14l9-5-9-5-9 5 9 5zm0 0v6m-7-6v6m14-6v6'
    },
    {
      title: 'Politics',
      description: 'Lorem ipsum dolor sit amet consectetur. Ac id eu vulputate egestas rutrum duis. Venenatis vestibulum elementum id tempus pretium morbi laoreet sapien diam.',
      iconColor: 'pink',
      iconPath: 'M9.75 14L7.5 21h9l-2.25-7m-4.5 0L12 3l2.25 11m-4.5 0h4.5'
    }
  ];
}
