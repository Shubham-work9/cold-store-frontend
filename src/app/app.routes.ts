import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
  
];

export const appRouter = provideRouter(routes);
