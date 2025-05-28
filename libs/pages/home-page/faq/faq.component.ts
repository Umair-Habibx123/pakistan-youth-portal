import { colors } from '../../../styles/colors';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent {
  colors = colors;

  faqs = [
      {
        "description": "What is Pakistan Youth Portal?"
      },
      {
        "description": "How can I sign up for a free trial?"
      },
      {
        "description": "What features are in the free trial?"
      },
      {
        "description": "What pricing plans does Pakistan Youth Portal offer?"
      },
      {
        "description": "Is Pakistan Youth Portal compatible with other software?"
      },
      {
        "description": "How secure is my data with Pakistan Youth Portal?"
      },
      {
        "description": "Does Pakistan Youth Portal offer customer support?"
      },
      {
        "description": "Can I customize Pakistan Youth Portal?"
      }
    ]
}