import { colors } from '../../../styles/colors';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaqService } from './faq.service';


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
  faqs: any[] = [];

  constructor(private router: Router, private FaqService: FaqService) { }

  ngOnInit(): void {
    this.FaqService.getFaqs().subscribe(response => {
      this.faqs = response; // Directly assign response here
    });
  }
}