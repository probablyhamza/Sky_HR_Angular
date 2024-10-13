import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HighlightPipe } from '../highlight.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacation-request',
  standalone: true,
  imports: [RouterModule, NavbarComponent, HighlightPipe, FormsModule, CommonModule],
  templateUrl: './vacation-request.component.html',
  styleUrl: './vacation-request.component.css'
})
export class VacationRequestComponent {

  searchTerm: string = '';

  vacationRequests = [
    {name: 'Omar Ali', submittedOn: '1/3/2023', duration: '3 Weeks (1/4/2023 - 21/4/2023)', salary: 3500},
    {name: 'Mohammad Nazal', submittedOn: '1/3/2023', duration: '3 Weeks (1/4/2023 - 21/4/2023)', salary: 3500},
    {name: 'Hazem Athamneh', submittedOn: '1/3/2023', duration: '3 Weeks (1/4/2023 - 21/4/2023)', salary: 3500},
    {name: 'Yaser Anaqreh', submittedOn: '1/3/2023', duration: '3 Weeks (1/4/2023 - 21/4/2023)', salary: 3500},
    {name: 'Ali Yousef', submittedOn: '1/3/2023', duration: '3 Weeks (1/4/2023 - 21/4/2023)', salary: 3500},
    {name: 'Majd Ahmad', submittedOn: '1/3/2023', duration: '3 Weeks (1/4/2023 - 21/4/2023)', salary: 3500},
    {name: 'Omar Ali', submittedOn: '1/3/2023', duration: '3 Weeks (1/4/2023 - 21/4/2023)', salary: 3500},

  ]
}
