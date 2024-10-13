import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { VacationRequestComponent } from './vacation-request/vacation-request.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile'
    },
    {
        path: 'vacation-request',
        component: VacationRequestComponent,
        title: 'Vacation'
    }
];

export default routes;
