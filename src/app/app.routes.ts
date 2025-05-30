import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/projects/projects.component';

export const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent}
];

