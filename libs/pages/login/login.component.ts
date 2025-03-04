import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { colors } from '../../styles/colors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  colors = colors;

  @ViewChild('userLogin') userLoginButton!: ElementRef<HTMLElement>;
  @ViewChild('adminLogin') adminLoginButton!: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // Set "User Login" as the default selection when the component loads
    this.onUserLoginClick();
  }

  onUserLoginClick(): void {
    this.userLoginButton.nativeElement.classList.add('bg-[#16BC88]', 'text-white');
    this.userLoginButton.nativeElement.classList.remove('bg-[#F9F9F9]', 'text-black');

    this.adminLoginButton.nativeElement.classList.remove('bg-[#16BC88]', 'text-white');
    this.adminLoginButton.nativeElement.classList.add('bg-[#F9F9F9]', 'text-black');
  }

  onAdminLoginClick(): void {
    this.adminLoginButton.nativeElement.classList.add('bg-[#16BC88]', 'text-white');
    this.adminLoginButton.nativeElement.classList.remove('bg-[#F9F9F9]', 'text-black');

    this.userLoginButton.nativeElement.classList.remove('bg-[#16BC88]', 'text-white');
    this.userLoginButton.nativeElement.classList.add('bg-[#F9F9F9]', 'text-black');
  }
}
