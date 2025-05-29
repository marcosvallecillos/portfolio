import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { LenguajeServiceService } from '../../services/lenguaje-service.service';
import { LanguajeBottomComponent } from '../../components/languaje-bottom/languaje-bottom.component';
import { ThemeComponent } from '../../components/theme/theme.component';
import { SocialsComponent } from '../../components/socials/socials.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutMeComponent, LanguajeBottomComponent, ThemeComponent, SocialsComponent, ProjectsComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('aboutMeSection , socialsSection, projectsSection, skillsSection') sections!: QueryList<ElementRef>;

  isSpanish: boolean = true;

  constructor(
    private languageService: LenguajeServiceService,
  )
    {
    this.languageService.isSpanish$.subscribe(
      (isSpanish: boolean) => this.isSpanish = isSpanish
    );
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.1 });

    this.sections.forEach(section => {
      observer.observe(section.nativeElement);
    });
  }

  getText(es: string, en: string): string {
    return this.isSpanish ? es : en;
  }
}
