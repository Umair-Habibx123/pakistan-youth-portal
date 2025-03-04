import { Component } from '@angular/core';

import { colors } from '../../../styles/colors';
interface Job {
  name: string;
  location: string;
  type: string;
  isOpen: boolean;
  date: string;
  image: string;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  cards = [
    { title: 'Applied Jobs', count: 26, bgColor: 'bg-[#E7F0FA]', icon: 'fas fa-briefcase text-blue-500' },
    { title: 'Favourite Jobs', count: 26, bgColor: 'bg-[#FFF6E6]', icon: 'fas fa-bookmark text-yellow-500' },
    { title: 'Job Alerts', count: 26, bgColor: 'bg-[#E7F6EA]', icon: 'fas fa-bell text-green-500' }
  ];

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

  colors = colors;
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

