import { Component } from '@angular/core';

import { colors } from '../../../styles/colors';


interface Users {
  name: string;
  email: string;
  contact: string;
  cities: string;
  category: string;
  image: string;
}
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent {



  colors = colors;
  cards = [
    { title: 'New Users', value: 645, percentage: '+2.5%', trend: 'up' },
    { title: 'Business Query', value: 400, percentage: '+2.5%', trend: 'up' },
    { title: 'Education Query', value: 360, percentage: '+2.5%', trend: 'up' },
    { title: 'Politics Query', value: 26, percentage: '+2.5%', trend: 'up' },
    { title: 'Job Offers', value: 26, percentage: '+2.5%', trend: 'up' },
    { title: 'Training Offers', value: 645, percentage: '-1.5%', trend: 'down' }
  ];

  users: Users[] = [
    { name: 'Senior UI/UX Designer', email: 'adn32@gmail.com', contact: '03000565431', cities: "Islamabad", category: 'Business', image: '../../../../assets/images/abd.jpeg' },
    { name: 'Senior UI/UX Designer', email: 'adn32@gmail.com', contact: '03000565431', cities: "Islamabad", category: 'Education', image: '../../../../assets/images/abd.jpeg' }
  ];
}
  
  