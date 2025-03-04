import { Component } from '@angular/core';
import { colors } from '../../styles/colors';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  colors = colors;

  currentSection: string = 'dashboard'; // Default section set to 'options1'

  loadContent(section: string) {
    this.currentSection = section;
  }



  getTitle(section: string): string {
    const titles: { [key: string]: string } = {
      dashboard: 'Dashboard',
      record: 'Records',
      trainings: 'Trainings',
      configurations: 'Configurations',
      testimonials: 'Testimonials',
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

