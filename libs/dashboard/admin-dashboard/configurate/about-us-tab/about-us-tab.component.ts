import { Component, EventEmitter, Output } from '@angular/core';
import { colors } from '../../../../styles/colors';

@Component({
  selector: 'app-about-us-tab',
  templateUrl: './about-us-tab.component.html',
  styleUrls: ['./about-us-tab.component.scss']
})
export class AboutUsTabComponent {

  @Output() addNewSlider = new EventEmitter<void>();
  colors = colors;

  aboutUs = [
    {
      image: '../../../assets/images/about1.jpeg',
      heading: "Country Name will go here..",
      description: "Slider description will go here..",
    },
    {
      image: '../../../assets/images/about2.jpeg',
      heading: "Country Name will go here..",
      description: "Slider description will go here..",
    },
    {
      image: '../../../assets/images/about3.jpeg',
      heading: "Country Name will go here..",
      description: "Slider description will go here..",
    },
  ];


  openModal() {
    this.addNewSlider.emit();
  }

  searchTerm: string = '';
  filteredAboutUs = [...this.aboutUs];

  filteredAboutus() {
    this.filteredAboutUs = []; // Reset before filtering
    this.filteredAboutUs = this.aboutUs.filter(aboutUs =>
      aboutUs.heading.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      aboutUs.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


}
