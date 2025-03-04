import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../../libs/pages/login/login.component';
import { RegisterComponent } from '../../libs/pages/register/register.component';
import { ForgotScreenComponent } from '../../libs/pages/login/forgot-screen/forgot-screen.component';
import { EnterCodeComponent } from '../../libs/pages/login/enter-code/enter-code.component';
import { UserDashboardComponent } from '../../libs/dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from '../../libs/dashboard/admin-dashboard/admin-dashboard.component';
import { HomePageComponent } from '../../libs/pages/home-page/home-page.component';
import { AboutUsPageComponent } from '../../libs/pages/about-us-page/about-us-page.component';
import { JobsPageComponent } from '../../libs/pages/jobs-page/jobs-page.component';
import { TrainingPageComponent } from '../../libs/pages/training-page/training-page.component';
import { BlogsPageComponent } from '../../libs/pages/blogs-page/blogs-page.component';
import { ContactUsPageComponent } from '../../libs/pages/contact-us-page/contact-us-page.component';
import { FAQPageComponent } from 'libs/pages/faqpage/faqpage.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'jobs', component: JobsPageComponent },
  { path: 'trainings', component: TrainingPageComponent },
  { path: 'blogs', component: BlogsPageComponent },
  { path: 'contact', component: ContactUsPageComponent },
  { path: 'faq', component: FAQPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotScreenComponent },
  { path: 'entercode', component: EnterCodeComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown paths to Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
