import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { colors } from '../../styles/colors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  colors = colors;

  @ViewChild('userLogin') userLoginButton!: ElementRef<HTMLElement>;
  @ViewChild('adminLogin') adminLoginButton!: ElementRef<HTMLElement>;

  email: string = '';
  password: string = '';
  isAdminLogin: boolean = false;

  constructor(private router: Router) { } // Inject Router

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.onUserLoginClick();
  }

  onUserLoginClick(): void {
    this.userLoginButton.nativeElement.classList.add('bg-[#16BC88]', 'text-white');
    this.userLoginButton.nativeElement.classList.remove('bg-[#F9F9F9]', 'text-black');

    this.adminLoginButton.nativeElement.classList.remove('bg-[#16BC88]', 'text-white');
    this.adminLoginButton.nativeElement.classList.add('bg-[#F9F9F9]', 'text-black');

    this.isAdminLogin = false; // Set user login
  }

  onAdminLoginClick(): void {
    this.adminLoginButton.nativeElement.classList.add('bg-[#16BC88]', 'text-white');
    this.adminLoginButton.nativeElement.classList.remove('bg-[#F9F9F9]', 'text-black');

    this.userLoginButton.nativeElement.classList.remove('bg-[#16BC88]', 'text-white');
    this.userLoginButton.nativeElement.classList.add('bg-[#F9F9F9]', 'text-black');

    this.isAdminLogin = true; // Set admin login
  }


  validateForm(): boolean {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      alert('Invalid Email Address');
      return false;
    }
    if (this.password.length < 6) {
      alert('Password must be at least 6 characters long');
      return false;
    }
    return true;
  }
  onLogin(): void {
    if (this.validateForm()) {
      if (this.isAdminLogin) {
        this.router.navigate(['/admin-dashboard']);
      } else {
        this.router.navigate(['/user-dashboard']);
      }
    }
  }
}