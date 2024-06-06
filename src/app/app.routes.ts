import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SwapiListComponent } from './swapi/swapi-list/swapi-list.component';
import { SwapiDetailsComponent } from './swapi/swapi-details/swapi-details.component';


export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: 'Landing',
  },
  {
    path: 'swapi-list',
    component: SwapiListComponent,
    title: 'Swapi List',
  },
  {
    path: 'swapi-details',
    component: SwapiDetailsComponent,
    title: 'Swapi Details',
  },
];
