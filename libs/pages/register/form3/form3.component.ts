import { Component, EventEmitter, Output } from '@angular/core';
import { colors } from '../../../styles/colors';
@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component {
  colors = colors;
  @Output() nextStep = new EventEmitter<void>();


  // declaration Form fields
  feedback: string = '';
  hearAbou: string = '';
  preferredCareerPath: string = '';
  hobbiesAndExtracurricular: string = '';

  // arrays for career paths and hobbies
  careerPaths: string[] = [
    'Business / Entrepreneurship',
    'Technology / IT',
    'Art / Design',
    'Social Services / NGOS',
    'HealthCare',
    'Other'
  ];

  hobbies: string[] = [
    'Business / Entrepreneurship',
    'Technology / IT',
    'Art / Design',
    'Social Services / NGOS',
    'HealthCare',
    'Other'
  ];

  // Dropdown options
  feedbacks = [
    'Career Guidance',
    'Resume Review',
    'Interview Preparation',
    'Skill Development',
    'Other'
  ];
  hearAbouts = [
    'Friend / Family',
    'Social Media',
    'School / College',
    'Online Search',
    'Advertisement',
    'Other'
  ];


  selectCareerPath(career: string) {
    this.preferredCareerPath = career;
  }

  selectHobby(hobby: string) {
    this.hobbiesAndExtracurricular = hobby;
  }

  validateForm(): boolean {
    // Validate Preferred Career Path
    if (!this.preferredCareerPath) {
      alert('Please select a preferred career path');
      return false;
    }

    // Validate Hobbies and Extracurricular
    if (!this.hobbiesAndExtracurricular) {
      alert('Please select a hobby or extracurricular activity');
      return false;
    }

    // Validate Feedback
    if (!this.feedback) {
      alert('Please select how we can help you');
      return false;
    }

    // Validate Hear About
    if (!this.hearAbou) {
      alert('Please select how you heard about this portal');
      return false;
    }

    return true;
  }



  goToNext() {
    if (this.validateForm()) {
      this.nextStep.emit();
    }
  }
}
