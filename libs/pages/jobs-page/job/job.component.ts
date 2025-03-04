import { Component } from '@angular/core';
import { colors } from '../../../styles/colors';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
  colors = colors;

  jobs = [
    {
      logo: '../../../assets/images/comp1.png',
      title: 'Payroll Accountant',
      location: 'Lahore, Pakistan',
      type: 'Full time',
      posted: '2 days ago',
      description: "As an Outbound Sales Development Representative at Devsinc, you will play a key role in driving our growth " +
        "strategy. Reporting to the Sales Manager, you will prospect, qualify, and create opportunities for our " +
        "Account Executives through consultative outreach and data-driven strategies. Create opportunities for discovery " +
        "calls with Account Executives by building a consistent and qualified pipeline. Set 1-3 qualified discovery calls " +
        "daily to maintain a steady flow of potential prospects.",
      requirements: "Bachelor’s degree in business, marketing, or a related field preferred. " +
        "1-3 years of experience in sales development, business development, or customer-facing roles. " +
        "Proven track record of success in prospecting, cold outreach, and lead generation."
    },
    {
      logo: '../../../assets/images/comp2.png',
      title: 'Payroll Accountant',
      location: 'Lahore, Pakistan',
      type: 'Full time',
      posted: '2 days ago',
      description: "As an Outbound Sales Development Representative at Devsinc, you will play a key role in driving our growth " +
        "strategy. Reporting to the Sales Manager, you will prospect, qualify, and create opportunities for our " +
        "Account Executives through consultative outreach and data-driven strategies. Create opportunities for discovery " +
        "calls with Account Executives by building a consistent and qualified pipeline. Set 1-3 qualified discovery calls " +
        "daily to maintain a steady flow of potential prospects.",
      requirements: "Bachelor’s degree in business, marketing, or a related field preferred. " +
        "1-3 years of experience in sales development, business development, or customer-facing roles. " +
        "Proven track record of success in prospecting, cold outreach, and lead generation."
    },
    {
      logo: '../../../assets/images/comp1.png',
      title: 'Offensive Security Engineer',
      location: 'Lahore, Pakistan',
      type: 'Full time',
      posted: '2 days ago',
      description: "As an Outbound Sales Development Representative at Devsinc, you will play a key role in driving our growth " +
        "strategy. Reporting to the Sales Manager, you will prospect, qualify, and create opportunities for our " +
        "Account Executives through consultative outreach and data-driven strategies. Create opportunities for discovery " +
        "calls with Account Executives by building a consistent and qualified pipeline. Set 1-3 qualified discovery calls " +
        "daily to maintain a steady flow of potential prospects.",
      requirements: "Bachelor’s degree in business, marketing, or a related field preferred. " +
        "1-3 years of experience in sales development, business development, or customer-facing roles. " +
        "Proven track record of success in prospecting, cold outreach, and lead generation."
    }
  ];


  isModalOpen = false;
  selectedJob: any = null;

  openModal(job: any) {
    this.selectedJob = job;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
