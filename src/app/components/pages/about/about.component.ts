import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  values = [
    {
      title: 'Excellence & Precision',
      desc: 'We are committed to structural and architectural precision, checking and validating all calculations.',
      icon: 'fa-solid fa-compass-drafting'
    },
    {
      title: 'Safety First',
      desc: 'Our designs strictly adhere to international codes and national directives, prioritizing site and occupier safety.',
      icon: 'fa-solid fa-hard-hat'
    },
    {
      title: 'Absolute Integrity',
      desc: 'Transparent contracting, objective appraisals, and honest PMC reporting are the foundations of our operations.',
      icon: 'fa-solid fa-handshake'
    }
  ];

  team = [
    {
      name: 'Saurabh Sharma',
      role: 'Managing Director & Co-Founder',
      bio: 'Over 15 years of project management and civil engineering experience, guiding major industrial infrastructure developments.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Ritu Sharma',
      role: 'Director of Design & Valuation',
      bio: 'Leading structural calculations and MEP planning with a focus on sustainable building engineering solutions.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Elena Rostova',
      role: 'Principal Architect',
      bio: 'Specialist in modern urban aesthetics and functional interior planning, mixing spatial elegance with structural viability.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    }
  ];
}
