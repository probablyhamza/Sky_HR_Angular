import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HighlightPipe } from '../highlight.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NavbarComponent, HighlightPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  EmployeeName = 'Hamza';

  searchTerm: string = '';

  vacationRequests = [
    {name: 'Zakaria Amer', submittedOn: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: 1000},
    {name: 'Ahmad Attar', submittedOn: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: 1000},
    {name: 'Mohammad Saleh', submittedOn: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: 1000},
  ];
}
