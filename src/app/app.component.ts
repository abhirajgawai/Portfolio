import { Component, HostBinding } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ThemeService } from './services/theme.service';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TimelineComponent } from './components/timeline/timeline.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ExperienceComponent,
    TimelineComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @HostBinding('class.dark-theme') isDarkTheme = false;

  // constructor(private themeService: ThemeService) {
  //   this.themeService.isDarkTheme$.subscribe((isDark) => {
  //     this.isDarkTheme = isDark;
  //   });
  // }
}
