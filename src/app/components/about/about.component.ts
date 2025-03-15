import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    console.log('AboutComponent initialized');
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

  handleEmailClick() {
    window.location.href = 'mailto:your.email@example.com';
  }
}
