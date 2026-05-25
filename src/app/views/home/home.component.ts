import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { LenguajeServiceService } from '../../services/lenguaje-service.service';
import { LanguajeBottomComponent } from '../../components/languaje-bottom/languaje-bottom.component';
import { ThemeComponent } from '../../components/theme/theme.component';
import { SocialsComponent } from '../../components/socials/socials.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { CardContactComponent } from '../../components/contact/contact.component';
import { HeaderComponent } from '../../components/header/header.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,  HeaderComponent, AboutMeComponent, LanguajeBottomComponent, ThemeComponent, ProjectsComponent, SkillsComponent, CardContactComponent, DragDropModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnInit {
  @ViewChildren('aboutMeSection , socialsSection, projectsSection, skillsSection , topRightButtons, contactSection') sections!: QueryList<ElementRef>;

  isSpanish: boolean = true;
  isMobile: boolean = false;

  constructor(
    private languageService: LenguajeServiceService,
  )
    {
    this.languageService.isSpanish$.subscribe(
      (isSpanish: boolean) => this.isSpanish = isSpanish
    );
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;
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
