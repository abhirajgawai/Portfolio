import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements AfterViewInit {
  projectsData: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with product listings, cart functionality, and checkout process.',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1470&q=80',
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
    },
    {
      id: 2,
      title: 'Weather App',
      description:
        'A weather application that shows current conditions and forecasts for any location.',
      tags: ['Angular', 'RxJS', 'API Integration', 'Tailwind CSS'],
      imageUrl:
        'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=1470&q=80',
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description:
        'Analytics dashboard for tracking engagement across multiple social media platforms.',
      tags: ['Angular', 'Chart.js', 'API Integration', 'Responsive Design'],
      imageUrl:
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1674&q=80',
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
    },
  ];

  // @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;

  // ngAfterViewInit() {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('is-visible');
  //           //observer.unobserve(entry.target); // Stop observing once visible
  //         }
  //       });
  //     },
  //     { threshold: 0.1 }
  //   );

  //   this.projectCards.forEach((card) => {
  //     if (card.nativeElement) {
  //       observer.observe(card.nativeElement);
  //     }
  //   });
  // }

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const section = this.el.nativeElement.querySelector('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }
  }
}
