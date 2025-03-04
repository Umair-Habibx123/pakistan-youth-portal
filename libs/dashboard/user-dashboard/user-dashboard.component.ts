import { Component } from '@angular/core';

import { colors } from '../../styles/colors';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {
  colors = colors;


  currentSection: string = 'overview'; // Default section set to 'options1'

  loadContent(section: string) {
    this.currentSection = section;
  }


  getTitle(section: string): string {
    const titles: { [key: string]: string } = {
      overview: 'Dashboard',
      applied: 'Applied Jobs',
      favourite: 'Favourite Jobs',
      alerts: 'Job Alerts',
      privacy: 'Privacy Policy',
      settings: 'Settings',
    };
    return titles[section] || 'Dashboard';
  }

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}