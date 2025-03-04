import { Component } from '@angular/core';

import { colors } from '../../../styles/colors';


interface Job {
  name: string;
  designation: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  


  colors = colors;


  testimonials: Job[] = [
    { name: 'Umair Habib', designation: 'Manager',  description: 'Business', image: '../../../../assets/images/IMG_20240309_200355.jpg' },
    { name: 'Umair Habib', designation: 'UX Designer',  description: 'Education', image:  '../../../../assets/images/IMG_20240309_200355.jpg'  },
    { name: 'Umair Habib', designation: 'CEO of Alpha Rages',  description: 'Business', image:  '../../../../assets/images/IMG_20240309_200355.jpg'  },
    { name: 'Umair Habib', designation: 'NHA',  description: 'Education', image:  '../../../../assets/images/IMG_20240309_200355.jpg'  },
    { name: 'Umair Habib', designation: 'General Manger',  description: 'Business', image:  '../../../../assets/images/IMG_20240309_200355.jpg'  },
    { name: 'Umair Habib', designation: 'Software Engineer',  description: 'Education', image:  '../../../../assets/images/IMG_20240309_200355.jpg'  },
    { name: 'Umair Habib', designation: 'Student',  description: 'Business', image:  '../../../../assets/images/IMG_20240309_200355.jpg'  },

 
  ];


  isModalOpen = false;
  selectedTraning: any = null;


  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }


  searchTerm: string = '';
  filteredTestimonials = [...this.testimonials];

  filteredTestimonial() {
    this.filteredTestimonials = []; // Reset before filtering
    this.filteredTestimonials = this.testimonials.filter(testimonials =>
      testimonials.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      testimonials.designation.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      testimonials.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
