import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';

interface Experience {
  id: number;
  company: string;
  logo: string;
  position: string;
  duration: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent implements AfterViewInit {
  experienceData: Experience[] = [
    {
      id: 1,
      company: 'Tech Innovations Inc.',
      logo: 'https://randomuser.me/api/portraits/men/1.jpg',
      position: 'Senior Frontend Developer',
      duration: 'Jan 2022 - Present',
      location: 'San Francisco, CA',
      description:
        'Leading the frontend development team in building responsive web applications. Implementing modern UI/UX practices and ensuring code quality through unit testing and code reviews.',
    },
    {
      id: 2,
      company: 'Digital Solutions Ltd.',
      logo: 'https://randomuser.me/api/portraits/men/2.jpg',
      position: 'Frontend Developer',
      duration: 'Mar 2020 - Dec 2021',
      location: 'Austin, TX',
      description:
        'Developed and maintained client-facing applications using Angular, TypeScript, and RxJS. Collaborated with design and backend teams to implement new features and optimize performance.',
    },
  ];

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
