import { Component } from '@angular/core';
import { colors } from '../../styles/colors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  colors = colors;
  isMenuOpen = false; // Add this property

  navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about-us', label: 'About us' },
    { path: '/jobs', label: 'Jobs' },
    { path: '/trainings', label: 'Trainings' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/contact', label: 'Contact us' },
    { path: '/faq', label: 'FAQ\'s' },
  ];

  toggleMenu(): void { // Add this method
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void { // Add this method to close the menu
    this.isMenuOpen = false;
  }
}