import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobileMenuOpen = signal(false);
  
  facebookUrl = environment.facebookUrl;
  twitterUrl = environment.twitterUrl;
  instagramUrl = environment.instagramUrl;
  linkedinUrl = environment.linkedinUrl;

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(prev => !prev);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
