import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      id: 'architecture',
      title: 'Architecture & Designing',
      icon: 'fa-solid fa-compass-drafting',
      image: '/architecture.png',
      lead: 'Transforming concepts into detailed spatial models, balancing aesthetic aspirations with physical viability.',
      subServices: [
        'Conceptual Layouts & Floor Plans',
        '3D Exterior Renderings & Interior Planning',
        'Municipal & Authority Sanction Drawings',
        'Landscape Design & Spatial Planning'
      ]
    },
    {
      id: 'engineering',
      title: 'Building Engineering & Structural Design',
      icon: 'fa-solid fa-calculator',
      image: '/engineering.png',
      lead: 'Designing reliable, safe, and cost-effective structural systems utilizing advanced finite element analysis.',
      subServices: [
        'Structural Analysis & Foundation Design',
        'MEP (Mechanical, Electrical, Plumbing) Layouts',
        'Structural Stability Auditing & Certification',
        'Safe Load Capacity Evaluations'
      ]
    },
    {
      id: 'rehab',
      title: 'Repair & Rehabilitation',
      icon: 'fa-solid fa-toolbox',
      image: '/banner.png',
      lead: 'Extending the lifespan of structures showing signs of concrete degradation, distress, or age-related fatigue.',
      subServices: [
        'Non-Destructive Testing (NDT)',
        'Retrofitting & Carbon Wrapping Solutions',
        'Basement Waterproofing & Structural Grouting',
        'Seismic Reinforcement Consultations'
      ]
    },
    {
      id: 'pmc',
      title: 'Project Management (PMC)',
      icon: 'fa-solid fa-sitemap',
      image: '/hero.png',
      lead: 'Protecting developer interest through comprehensive cost controls, timeline checks, and material quality assurance.',
      subServices: [
        'Detailed Project Reports (DPR)',
        'Quantity Take-offs & Estimation Auditing',
        'Contractor Billing & Progress Validation',
        'On-site Quality Control Inspections'
      ]
    },
    {
      id: 'valuation',
      title: 'Valuations & Appraisals',
      icon: 'fa-solid fa-file-invoice-dollar',
      image: '/architecture.png',
      lead: 'Providing licensed properties, land, and asset valuations for financial institutions, court records, and taxation.',
      subServices: [
        'Income Tax & Capital Gains Valuation',
        'Visa Asset Appraisals',
        'Bank Credit Valuation Reports',
        'RERA Compliance Consulting'
      ]
    }
  ];

  selectedServiceId = signal('architecture');

  selectService(id: string) {
    this.selectedServiceId.set(id);
  }

  getSelectedService() {
    return this.services.find(s => s.id === this.selectedServiceId()) || this.services[0];
  }
}
