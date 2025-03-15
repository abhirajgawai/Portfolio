import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkSubject = new BehaviorSubject<boolean>(false);
  isDark$ = this.isDarkSubject.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.setLightMode();
  }

  // New method for setting light mode explicitly
  setLightMode(): void {
    this.isDarkSubject.next(false);
    this.document.documentElement.classList.remove('dark');
  }

  // Updated dark mode method
  setDarkMode(isDark: boolean): void {
    this.isDarkSubject.next(isDark);
    this.document.documentElement.classList.toggle('dark', isDark);
  }

  // Updated toggle method
  toggleDarkMode(): void {
    const isDark = !this.isDarkSubject.value;
    if (isDark) {
      this.setDarkMode(true);
    } else {
      this.setLightMode();
    }
  }
}
