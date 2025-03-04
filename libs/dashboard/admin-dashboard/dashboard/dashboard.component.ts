import { Component, OnInit } from '@angular/core';
import { colors } from '../../../styles/colors';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import ChartDataLabels from 'chartjs-plugin-datalabels';


interface Users {
  name: string;
  email: string;
  contact: string;
  cities: string;
  category: string;
  image: string;
}


interface CityData {
  name: string;
  percentage: number;
  month: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  colors = colors;
  cards = [
    { title: 'New Users', value: 645, percentage: '+2.5%', trend: 'up' },
    { title: 'Business Query', value: 400, percentage: '+2.5%', trend: 'up' },
    { title: 'Education Query', value: 360, percentage: '+2.5%', trend: 'up' },
    { title: 'Politics Query', value: 26, percentage: '+2.5%', trend: 'up' },
    { title: 'Job Offers', value: 26, percentage: '+2.5%', trend: 'up' },
    { title: 'Training Offers', value: 645, percentage: '-1.5%', trend: 'down' }
  ];

  users: Users[] = [
    { name: 'Senior UI/UX Designer', email: 'adn32@gmail.com', contact: '03000565431', cities: "Islamabad", category: 'Business', image: '../../../../assets/images/abd.jpeg' },
    { name: 'Senior UI/UX Designer', email: 'adn32@gmail.com', contact: '03000565431', cities: "Islamabad", category: 'Education', image: '../../../../assets/images/abd.jpeg' }
  ];


  searchTerm: string = '';
  filteredUsers = [...this.users];

  filterUsers() {
    this.filteredUsers = []; // Reset before filtering
    this.filteredUsers = this.users.filter(users =>
      users.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      users.cities.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      users.category.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Dropdown months
  months = ['January', 'February'];
  selectedMonth = 'January';

  // Cities data with months
  cities: CityData[] = [
    { name: 'Islamabad', percentage: 82, month: 'January' },
    { name: 'Multan', percentage: 65, month: 'January' },
    { name: 'Lahore', percentage: 48, month: 'January' },
    { name: 'Karachi', percentage: 34, month: 'January' },
    { name: 'Faisalabad', percentage: 57, month: 'January' },
    { name: 'Rawalpindi', percentage: 70, month: 'January' },
    { name: 'Sargoda', percentage: 17, month: 'January' },
    { name: 'Peshawar', percentage: 36, month: 'January' },

    { name: 'Islamabad', percentage: 77, month: 'February' },
    { name: 'Multan', percentage: 60, month: 'February' },
    { name: 'Lahore', percentage: 52, month: 'February' },
    { name: 'Karachi', percentage: 30, month: 'February' },
    { name: 'Faisalabad', percentage: 50, month: 'February' },
    { name: 'Rawalpindi', percentage: 65, month: 'February' },
    { name: 'Sargoda', percentage: 22, month: 'February' },
    { name: 'Peshawar', percentage: 40, month: 'February' },
  ];

  filteredCities: CityData[] = [];

  chart: any;
  trafficChart: any;

  trafficData = [
    { name: 'Google', percentage: 75, color: '#ef4444' }, // Red
    { name: 'Meta', percentage: 40, color: '#facc15' }, // Yellow
    { name: 'Instagram', percentage: 85, color: '#000000' }, // Black
    { name: 'LinkedIn', percentage: 25, color: '#3b82f6' }, // Blue
    { name: 'People', percentage: 16, color: '#ec4899' }  // Pink
  ];

  ngOnInit(): void {
    this.filterData();

  }

  filterData() {
    this.filteredCities = this.cities.filter(city => city.month === this.selectedMonth);
    this.updateChart();
  }

  updateChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('MyChart', {
      type: 'bar',
      data: {
        labels: this.filteredCities.map(city => city.name),
        datasets: [{
          label: 'Top Cities Requests',
          data: this.filteredCities.map(city => city.percentage),
          backgroundColor: colors.primary,
        }]
      },
      options: {
        scales: {
          x: {
            ticks: {
              color: '#1F61EB',
              font: {
              }
            }
          },
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20
            }
          }
        },
        plugins: {
          tooltip: {
            enabled: true
          },
          datalabels: {
            anchor: 'end',
            align: 'top',
            color: '#1F61EB',
            font: {
            },
            formatter: (value) => value + '%'
          }
        }
      },
      plugins: [ChartDataLabels]
    });
  }
}