import { Component } from '@angular/core';
import { colors } from '../../../styles/colors';

interface Job {
  name: string;
  location: string;
  type: string;
  date: string;
  description: string;
  requirements: string;
  image: string;
}

@Component({
  selector: 'app-favourite-jobs',
  templateUrl: './favourite-jobs.component.html',
  styleUrls: ['./favourite-jobs.component.scss']
})
export class FavouriteJobsComponent {
  colors = colors;

  jobs: Job[] = [
    {
      name: 'Networking Engineer', location: 'Lahore, Pakistan', type: 'Full Time', date: '2025-10-25', image: '../../../../assets/images/comp-logo2.png', description: "As an Outbound Sales Development Representative at Devsinc, you will play a key role in driving our growth " +
        "strategy. Reporting to the Sales Manager, you will prospect, qualify, and create opportunities for our " +
        "Account Executives through consultative outreach and data-driven strategies. Create opportunities for discovery " +
        "calls with Account Executives by building a consistent and qualified pipeline. Set 1-3 qualified discovery calls " +
        "daily to maintain a steady flow of potential prospects.",
      requirements: "Bachelor’s degree in business, marketing, or a related field preferred. " +
        "1-3 years of experience in sales development, business development, or customer-facing roles. " +
        "Proven track record of success in prospecting, cold outreach, and lead generation."
    },
    {
      name: 'Sr. UXUI Designer', location: 'Lahore, Pakistan', type: 'Part Time', date: '2023-10-15', image: '../../../../assets/images/comp-logo2.png', description: "As an Outbound Sales Development Representative at Devsinc, you will play a key role in driving our growth " +
        "strategy. Reporting to the Sales Manager, you will prospect, qualify, and create opportunities for our " +
        "Account Executives through consultative outreach and data-driven strategies. Create opportunities for discovery " +
        "calls with Account Executives by building a consistent and qualified pipeline. Set 1-3 qualified discovery calls " +
        "daily to maintain a steady flow of potential prospects.",
      requirements: "Bachelor’s degree in business, marketing, or a related field preferred. " +
        "1-3 years of experience in sales development, business development, or customer-facing roles. " +
        "Proven track record of success in prospecting, cold outreach, and lead generation."
    },
    {
      name: 'Networking Engineer', location: 'Lahore, Pakistan', type: 'Remote', date: '2025-10-25', image: '../../../../assets/images/comp-logo2.png', description: "As an Outbound Sales Development Representative at Devsinc, you will play a key role in driving our growth " +
        "strategy. Reporting to the Sales Manager, you will prospect, qualify, and create opportunities for our " +
        "Account Executives through consultative outreach and data-driven strategies. Create opportunities for discovery " +
        "calls with Account Executives by building a consistent and qualified pipeline. Set 1-3 qualified discovery calls " +
        "daily to maintain a steady flow of potential prospects.",
      requirements: "Bachelor’s degree in business, marketing, or a related field preferred. " +
        "1-3 years of experience in sales development, business development, or customer-facing roles. " +
        "Proven track record of success in prospecting, cold outreach, and lead generation."
    },
    {
      name: 'Networking Engineer', location: 'Lahore, Pakistan', type: 'Hybrid', date: '2025-10-25', image: '../../../../assets/images/comp-logo2.png', description: "As an Outbound Sales Development Representative at Devsinc, you will play a key role in driving our growth " +
        "strategy. Reporting to the Sales Manager, you will prospect, qualify, and create opportunities for our " +
        "Account Executives through consultative outreach and data-driven strategies. Create opportunities for discovery " +
        "calls with Account Executives by building a consistent and qualified pipeline. Set 1-3 qualified discovery calls " +
        "daily to maintain a steady flow of potential prospects.",
      requirements: "Bachelor’s degree in business, marketing, or a related field preferred. " +
        "1-3 years of experience in sales development, business development, or customer-facing roles. " +
        "Proven track record of success in prospecting, cold outreach, and lead generation."
    },
    {
      name: 'Networking Engineer', location: 'Lahore, Pakistan', type: 'Flexible', date: '2025-10-25', image: '../../../../assets/images/comp-logo2.png', description: "As an Outbound Sales Development Representative at Devsinc, you will play a key role in driving our growth " +
        "strategy. Reporting to the Sales Manager, you will prospect, qualify, and create opportunities for our " +
        "Account Executives through consultative outreach and data-driven strategies. Create opportunities for discovery " +
        "calls with Account Executives by building a consistent and qualified pipeline. Set 1-3 qualified discovery calls " +
        "daily to maintain a steady flow of potential prospects.",
      requirements: "Bachelor’s degree in business, marketing, or a related field preferred. " +
        "1-3 years of experience in sales development, business development, or customer-facing roles. " +
        "Proven track record of success in prospecting, cold outreach, and lead generation."
    },
    {
      name: 'Networking Engineer', location: 'Lahore, Pakistan', type: 'Freelance', date: '2025-10-25', image: '../../../../assets/images/comp-logo2.png', description: "As an Outbound Sales Development Representative at Devsinc, you will play a key role in driving our growth " +
        "strategy. Reporting to the Sales Manager, you will prospect, qualify, and create opportunities for our " +
        "Account Executives through consultative outreach and data-driven strategies. Create opportunities for discovery " +
        "calls with Account Executives by building a consistent and qualified pipeline. Set 1-3 qualified discovery calls " +
        "daily to maintain a steady flow of potential prospects.",
      requirements: "Bachelor’s degree in business, marketing, or a related field preferred. " +
        "1-3 years of experience in sales development, business development, or customer-facing roles. " +
        "Proven track record of success in prospecting, cold outreach, and lead generation."
    },
    {
      name: 'Networking Engineer', location: 'Lahore, Pakistan', type: 'Internship', date: '2025-10-25', image: '../../../../assets/images/comp-logo2.png', description: "As an Outbound Sales Development Representative at Devsinc, you will play a key role in driving our growth " +
        "strategy. Reporting to the Sales Manager, you will prospect, qualify, and create opportunities for our " +
        "Account Executives through consultative outreach and data-driven strategies. Create opportunities for discovery " +
        "calls with Account Executives by building a consistent and qualified pipeline. Set 1-3 qualified discovery calls " +
        "daily to maintain a steady flow of potential prospects.",
      requirements: "Bachelor’s degree in business, marketing, or a related field preferred. " +
        "1-3 years of experience in sales development, business development, or customer-facing roles. " +
        "Proven track record of success in prospecting, cold outreach, and lead generation."
    },
  ];

  // Check if the deadline has expired
  isDeadlineExpired(deadline: string): boolean {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    return deadlineDate < today;
  }

  // Get dynamic deadline text
  getDeadlineText(deadline: string): string {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const timeDifference = deadlineDate.getTime() - today.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));

    if (daysRemaining > 0) {
      return `${daysRemaining} days remaining`;
    } else if (daysRemaining === 0) {
      return 'Today is the last day';
    } else {
      return 'Job expired';
    }
  }


  searchTerm: string = '';
  filteredJobs = [...this.jobs];

  filterJobs() {
    this.filteredJobs = []; // Reset before filtering
    this.filteredJobs = this.jobs.filter(job =>
      job.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      job.type.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }




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