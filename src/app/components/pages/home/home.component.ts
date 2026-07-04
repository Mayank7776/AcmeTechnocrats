import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  stats = [
    { value: '250+', label: 'Projects Completed', icon: 'fa-solid fa-circle-check' },
    { value: '15+', label: 'Years Experience', icon: 'fa-solid fa-award' },
    { value: '50+', label: 'Expert Engineers', icon: 'fa-solid fa-users-gears' },
    { value: '99%', label: 'Satisfied Clients', icon: 'fa-solid fa-face-smile' }
  ];

  services = [
    {
      title: 'Architecture & Design',
      desc: 'Innovative, sustainable, and functional architectural planning tailored to modern urban requirements.',
      image: '/architecture.png',
      link: '/services'
    },
    {
      title: 'Building Engineering',
      desc: 'Rigorous structural analysis, MEP engineering, and safety inspections ensuring robust structures.',
      image: '/engineering.png',
      link: '/services'
    },
    {
      title: 'Project Management (PMC)',
      desc: 'End-to-end consultancy, cost management, and quality control from ground breaking to handover.',
      image: '/banner.png',
      link: '/services'
    }
  ];

  testimonials = [
    {
      quote: "Buildsworth Solutions transformed our design vision into reality. Their engineering analysis was extremely rigorous, and their PMC team completed the project weeks ahead of schedule.",
      author: "Robert Chen",
      role: "Operations Director, Vertex Developments"
    },
    {
      quote: "Their team was extremely professional, maintaining strict safety protocols and delivering unmatched quality on our commercial rehabilitation project.",
      author: "Sarah Jenkins",
      role: "Infrastructure Head, Alpha Corporation"
    }
  ];

  activeTestimonial = signal(0);
  contactFormSubmitted = signal(false);

  setTestimonial(index: number) {
    this.activeTestimonial.set(index);
  }

  submitContactForm() {
    this.contactFormSubmitted.set(true);
    setTimeout(() => {
      this.contactFormSubmitted.set(false);
    }, 5000);
  }
}
