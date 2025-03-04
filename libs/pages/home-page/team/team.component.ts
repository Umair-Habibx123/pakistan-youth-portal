import { Component } from '@angular/core';

import { colors } from '../../../styles/colors';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  colors = colors;
  teamMembers = [
    {
      name: 'Theresa Webb',
      role: 'Application Support Analyst Lead',
      description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
      image: '../../../assets/images/person1.png',
      twitter: '#',
      linkedin: '#'
    },
    {
      name: 'Courtney Henry',
      role: 'Director, Undergraduate Analytics and Planning',
      description: 'Lead engineering teams at Figma, Pitch, and Protocol Labs.',
      image: '../../../assets/images/person2.png',
      twitter: '#',
      linkedin: '#'
    },
    {
      name: 'Albert Flores',
      role: 'Career Educator',
      description: 'Former PM for Linear, Lambda School, and On Deck.',
      image: '../../../assets/images/person3.png',
      twitter: '#',
      linkedin: '#'
    },
    {
      name: 'Marvin McKinney',
      role: 'Co-op & Internships Program & Operations Manager',
      description: 'Former frontend dev for Linear, Coinbase, and Postscript.',
      image: '../../../assets/images/person4.png',
      twitter: '#',
      linkedin: '#'
    }
  ];
}
