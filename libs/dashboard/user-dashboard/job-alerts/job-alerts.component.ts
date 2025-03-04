import { Component } from '@angular/core';
import { colors } from '../../../styles/colors';

interface Job {
  name: string;
  location: string;
  type: string;
  date: string;
  isOpen: boolean;
  image: string;
}


@Component({
  selector: 'app-job-alerts',
  templateUrl: './job-alerts.component.html',
  styleUrls: ['./job-alerts.component.scss']
})
export class JobAlertsComponent {
  colors = colors;


  jobs: Job[] = [
    { name: 'Networking Engineer', location: 'Lahore, Pakistan', type: 'Full Time', isOpen: true, date: '25/01/2025', image: '../../../../assets/images/comp-logo2.png' },
    { name: 'Sr. UXUI Designer', location: 'Lahore, Pakistan', type: 'Part Time', isOpen: false, date: '22/01/2025', image: '../../../../assets/images/comp-logo2.png' },
    { name: 'Sr. UXUI Designer', location: 'Lahore, Pakistan', type: 'Hybrid', isOpen: false, date: '22/01/2025', image: '../../../../assets/images/comp-logo2.png' },
    { name: 'Sr. UXUI Designer', location: 'Lahore, Pakistan', type: 'Remote', isOpen: false, date: '22/01/2025', image: '../../../../assets/images/comp-logo2.png' },
    { name: 'Networking Engineer', location: 'Lahore, Pakistan', type: 'Full Time', isOpen: true, date: '25/01/2025', image: '../../../../assets/images/comp-logo2.png' },
    { name: 'Sr. UXUI Designer', location: 'Lahore, Pakistan', type: 'Part Time', isOpen: false, date: '22/01/2025', image: '../../../../assets/images/comp-logo2.png' },
    { name: 'Sr. UXUI Designer', location: 'Lahore, Pakistan', type: 'Hybrid', isOpen: false, date: '22/01/2025', image: '../../../../assets/images/comp-logo2.png' },
    { name: 'Sr. UXUI Designer', location: 'Lahore, Pakistan', type: 'Remote', isOpen: false, date: '22/01/2025', image: '../../../../assets/images/comp-logo2.png' },

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

  isOpen = true;

  toggleStatus(job: Job): void {
    job.isOpen = !job.isOpen;
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
}
