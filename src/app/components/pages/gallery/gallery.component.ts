import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  galleryItems = [
    {
      title: 'Skyscraper Architectural Rendering',
      category: 'Architecture',
      image: '/hero.png'
    },
    {
      title: 'Structural Steel Frame Construction',
      category: 'Engineering',
      image: '/engineering.png'
    },
    {
      title: 'Interior Spatial Planning Model',
      category: 'Architecture',
      image: '/architecture.png'
    },
    {
      title: 'Concrete Foundation Grouting Work',
      category: 'Site Work',
      image: '/banner.png'
    },
    {
      title: 'High-Rise Construction Site Survey',
      category: 'Site Work',
      image: '/hero.png'
    },
    {
      title: 'Drafting Blueprints & CAD Analysis',
      category: 'Architecture',
      image: '/architecture.png'
    },
    {
      title: 'MEP Systems Installation Auditing',
      category: 'Engineering',
      image: '/engineering.png'
    },
    {
      title: 'Finished Residential Structural Elevation',
      category: 'Architecture',
      image: '/banner.png'
    }
  ];

  selectedCategory = signal('All');
  activeLightboxItem = signal<any | null>(null);

  filterCategory(category: string) {
    this.selectedCategory.set(category);
  }

  filteredItems = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'All') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === cat);
  });

  openLightbox(item: any) {
    this.activeLightboxItem.set(item);
  }

  closeLightbox() {
    this.activeLightboxItem.set(null);
  }
}
