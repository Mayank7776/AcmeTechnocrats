import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  facebookUrl = environment.facebookUrl;
  twitterUrl = environment.twitterUrl;
  instagramUrl = environment.instagramUrl;
  linkedinUrl = environment.linkedinUrl;
}
