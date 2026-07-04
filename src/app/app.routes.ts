import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Buildsworth Solutions | Home' },
  { path: 'about', component: AboutComponent, title: 'Buildsworth Solutions | About Us' },
  { path: 'services', component: ServicesComponent, title: 'Buildsworth Solutions | Services' },
  { path: 'projects', component: ProjectsComponent, title: 'Buildsworth Solutions | Projects' },
  { path: 'gallery', component: GalleryComponent, title: 'Buildsworth Solutions | Gallery' },
  { path: '**', redirectTo: '' }
];
