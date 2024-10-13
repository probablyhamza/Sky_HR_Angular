import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HighlightPipe } from '../highlight.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, NavbarComponent, HighlightPipe, FormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  
  profilePicture = '../../assets/ahmad_azmi.jpg';
  profileName = 'Ahmad Azmi';
  profileJobTitle = 'Junior Accounting Officer';
  reportingTo = 'Salwa Assem';
  corporateLevel = 'Level 10';
  lifetime = '2.5 Years';
  vacationDaysLeft = '10 Days';
  sickDaysLeft = '14 Days';

  
  vacationHistory = [
    { type: 'Annual Vacation', startDate: '2/3/2023', endDate: '10/3/2023', days: 8, approvedBy: 'Hazem Azmi' },
    { type: 'Sick Vacation', startDate: '12/3/2023', endDate: '15/3/2023', days: 3, approvedBy: 'Hazem Azmi' },
    { type: 'Non Paid Vacation', startDate: '18/4/2023', endDate: '25/4/2023', days: 7, approvedBy: 'Hazem Azmi' },
    { type: 'Annual Vacation', startDate: '2/5/2023', endDate: '10/5/2023', days: 8, approvedBy: 'Hazem Azmi' },
    { type: 'Sick Vacation', startDate: '12/6/2023', endDate: '20/6/2023', days: 8, approvedBy: 'Hazem Azmi' }
  ];

  searchTerm: string = '';

  vacationRequests = [
    {name: 'Zakaria Amer', submittedOn: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: 1000},
    {name: 'Ahmad Attar', submittedOn: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: 1000},
    {name: 'Mohammad Saleh', submittedOn: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: 1000},
  ];
}
