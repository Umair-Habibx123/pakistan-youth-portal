import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../../libs/pages/navbar/navbar.component';
import { AboutUsComponent } from '../../libs/pages/home-page/about-us/about-us.component';
import { OurServicesComponent } from '../../libs/pages/home-page/our-services/our-services.component';
import { WhyPortalComponent } from '../../libs/pages/home-page/why-portal/why-portal.component';
import { TeamComponent } from '../../libs/pages/home-page/team/team.component';
import { SuccessStoryComponent } from '../../libs/pages/home-page/success-story/success-story.component';
import { ContactComponent } from '../../libs/pages/home-page/contact/contact.component';
import { FAQComponent } from '../../libs/pages/home-page/faq/faq.component';
import { FooterComponent } from '../../libs/pages/footer/footer.component';
import { BlogsComponent } from '../../libs/pages/home-page/blogs/blogs.component';
import { JobComponent } from '../../libs/pages/jobs-page/job/job.component';
import { Blogs2Component } from '../../libs/pages/blogs-page/blogs2/blogs2.component';
import { TrainingComponent } from '../../libs/pages/training-page/training/training.component';
import { LoginComponent } from '../../libs/pages/login/login.component';
import { RegisterComponent } from '../../libs/pages/register/register.component';
import { Form1Component } from '../../libs/pages/register/form1/form1.component';
import { Form2Component } from '../../libs/pages/register/form2/form2.component';
import { Form3Component } from '../../libs/pages/register/form3/form3.component';
import { ForgotScreenComponent } from '../../libs//pages/login/forgot-screen/forgot-screen.component';
import { EnterCodeComponent } from '../../libs/pages/login/enter-code/enter-code.component';
import { UserDashboardComponent } from '../../libs/dashboard/user-dashboard/user-dashboard.component';
import { OverviewComponent } from '../../libs/dashboard/user-dashboard/overview/overview.component';
import { AppliedJobsComponent } from '../../libs/dashboard/user-dashboard/applied-jobs/applied-jobs.component';
import { FavouriteJobsComponent } from '../../libs/dashboard/user-dashboard/favourite-jobs/favourite-jobs.component';
import { JobAlertsComponent } from '../../libs/dashboard/user-dashboard/job-alerts/job-alerts.component';
import { PrivacyPolicyComponent } from '../../libs/dashboard/shared/privacy-policy/privacy-policy.component';
import { SettingsComponent } from '../../libs/dashboard/shared/settings/settings.component';
import { AdminDashboardComponent } from '../../libs/dashboard/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from '../../libs/dashboard/admin-dashboard/dashboard/dashboard.component';
import { RecordComponent } from '../../libs/dashboard/admin-dashboard/record/record.component';
import { TrainingsComponent } from '../../libs/dashboard/admin-dashboard/trainings/trainings.component';
import { FormsModule } from '@angular/forms';
import { SliderTabComponent } from '../../libs/dashboard/admin-dashboard/configurate/slider-tab/slider-tab.component';
import { BlogsTabComponent } from '../../libs/dashboard/admin-dashboard/configurate/blogs-tab/blogs-tab.component';
import { AboutUsTabComponent } from '../../libs/dashboard/admin-dashboard/configurate/about-us-tab/about-us-tab.component';
import { SliderModalComponent } from '../../libs/dashboard/admin-dashboard/configurate/slider-modal/slider-modal.component';
import { BlogsModalComponent } from '../../libs/dashboard/admin-dashboard/configurate/blogs-modal/blogs-modal.component';
import { AboutUsModalComponent } from '../../libs/dashboard/admin-dashboard/configurate/about-us-modal/about-us-modal.component';
import { TestimonialsComponent } from '../../libs/dashboard/admin-dashboard/testimonials/testimonials.component';
import { BannerComponent } from '../../libs/pages/home-page/banner/banner.component';
import { HomePageComponent } from '../../libs/pages/home-page/home-page.component';
import { AboutUsPageComponent } from '../../libs/pages/about-us-page/about-us-page.component';
import { JobsPageComponent } from '../../libs/pages/jobs-page/jobs-page.component';
import { TrainingPageComponent } from '../../libs/pages/training-page/training-page.component';
import { BlogsPageComponent } from '../../libs/pages/blogs-page/blogs-page.component';
import { ContactUsPageComponent } from '../../libs/pages/contact-us-page/contact-us-page.component';
import { FAQPageComponent } from '../../libs/pages/faqpage/faqpage.component';
import { ConfigurateComponent } from '../../libs/dashboard/admin-dashboard/configurate/configurate.component';

import { SharedServicesAuthModule } from 'libs/shared/services/auth/shared-services-auth/shared-services-auth.module';
import { SharedServicesDataModule } from 'libs/shared/services/data/shared-services-data/shared-services-data.module';
import { SharedServicesGlobalDataModule } from 'libs/shared/services/shared-services-global-data/shared-services-global-data.module';
import { SharedHelpersFieldValidationsModule } from 'libs/shared/helpers/field-validations/shared-helpers-field-validation/shared-helpers-field-validation.module';



import { BlogService } from '../../libs/services/blog.service';

import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    OurServicesComponent,
    WhyPortalComponent,
    TeamComponent,
    SuccessStoryComponent,
    ContactComponent,
    FAQComponent,
    FooterComponent,
    BlogsComponent,
    JobComponent,
    Blogs2Component,
    TrainingComponent,
    LoginComponent,
    RegisterComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    ForgotScreenComponent,
    EnterCodeComponent,
    UserDashboardComponent,
    OverviewComponent,
    AppliedJobsComponent,
    FavouriteJobsComponent,
    JobAlertsComponent,
    PrivacyPolicyComponent,
    SettingsComponent,
    AdminDashboardComponent,
    DashboardComponent,
    RecordComponent,
    TrainingsComponent,
    SliderTabComponent,
    BlogsTabComponent,
    AboutUsTabComponent,
    SliderModalComponent,
    BlogsModalComponent,
    AboutUsModalComponent,
    TestimonialsComponent,
    BannerComponent,
    HomePageComponent,
    AboutUsPageComponent,
    JobsPageComponent,
    TrainingPageComponent,
    BlogsPageComponent,
    ContactUsPageComponent,
    FAQPageComponent,
    ConfigurateComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedServicesAuthModule,
    SharedServicesDataModule,
    SharedServicesGlobalDataModule,
    SharedHelpersFieldValidationsModule,

    HttpClientModule,
    
  ],
  providers: [BlogService],

  bootstrap: [AppComponent]
})
export class AppModule { }
