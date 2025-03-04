import { Component, EventEmitter, Output } from '@angular/core';
import { colors } from '../../../styles/colors';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component {
  colors = colors;
  @Output() nextStep = new EventEmitter<void>();

  // declaration Form fields
  univesity: string = '';
  degree: string = '';
  course: string = '';
  institute: string = '';
  duration: string = '';
  field: string = '';
  organization: string = '';



  // Dropdown options
  universities = ['NUML', 'NUST', 'COMSATS'];
  degrees = ['Bachelor of Science', 'Master of Science', 'PhD'];
  courses = ['Computer Science', 'Business Administration', 'Economics'];
  fields = ['Software Engineering', 'Marketing', 'Finance'];


  validateForm(): boolean {
    // Validate University
    if (!this.univesity) {
      alert('Please select a university');
      return false;
    }

    // Validate Degree
    if (!this.degree) {
      alert('Please select a degree');
      return false;
    }

    // Validate Course
    if (!this.course) {
      alert('Please select a course');
      return false;
    }

    // Validate Institute Name
    if (this.institute.length < 3) {
      alert('please enter a institute name');
      return false;
    }

    // Validate Duration
    if (!this.duration) {
      alert('Please enter a valid duration');
      return false;
    }

    // Validate Field
    if (!this.field) {
      alert('Please select a field');
      return false;
    }

    // Validate Organization Name 
    if (!this.organization) {
      alert('Please enter an organization name');
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
