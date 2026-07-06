import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Acme Technocrats | Home' },
  { path: 'about', component: AboutComponent, title: 'Acme Technocrats | About Us' },
  { path: 'services', component: ServicesComponent, title: 'Acme Technocrats | Services' },
  { path: 'projects', component: ProjectsComponent, title: 'Acme Technocrats | Projects' },
  { path: 'gallery', component: GalleryComponent, title: 'Acme Technocrats | Gallery' },
  { path: '**', redirectTo: '' }
];
