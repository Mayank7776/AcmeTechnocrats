import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Elanza Luxury Residences',
      category: 'Residential',
      status: 'Completed',
      location: 'Sector 150, Noida',
      image: '/hero.png',
      scope: 'Structural Design & MEP Planning',
      size: '150,000 sq.ft.'
    },
    {
      title: 'Horizon Corporate Tower',
      category: 'Commercial',
      status: 'Completed',
      location: 'Sector 62, Noida',
      image: '/banner.png',
      scope: 'Project Management Consultancy (PMC)',
      size: '220,000 sq.ft.'
    },
    {
      title: 'Apex Industrial Warehouse',
      category: 'Industrial',
      status: 'Completed',
      location: 'Sihani, Ghaziabad',
      image: '/engineering.png',
      scope: 'Structural Auditing & Design Validation',
      size: '95,000 sq.ft.'
    },
    {
      title: 'Royal Palms Heights',
      category: 'Residential',
      status: 'Completed',
      location: 'Vasundhara, Ghaziabad',
      image: '/architecture.png',
      scope: 'Architectural Plan & Foundation Check',
      size: '180,000 sq.ft.'
    },
    {
      title: 'TechnoPark IT Hub',
      category: 'Commercial',
      status: 'Completed',
      location: 'Greater Noida Link Road',
      image: '/hero.png',
      scope: 'Full Structural & MEP Audit',
      size: '310,000 sq.ft.'
    },
    {
      title: 'Logix Cold Storage Facility',
      category: 'Industrial',
      status: 'Completed',
      location: 'Kavi Nagar, Ghaziabad',
      image: '/engineering.png',
      scope: 'Structural Rehabilitation & PMC',
      size: '60,000 sq.ft.'
    }
  ];

  selectedFilter = signal('All');

  filterProjects(category: string) {
    this.selectedFilter.set(category);
  }

  filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    if (filter === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === filter);
  });
}
