import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenguajeServiceService } from '../../services/lenguaje-service.service';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,RouterLink, ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  isSpanish: boolean = true;

  constructor(
    private languageService: LenguajeServiceService,
  )
    {
    this.languageService.isSpanish$.subscribe(
      (isSpanish: boolean) => this.isSpanish = isSpanish
    );
  }


  toggleLanguage(language: 'es' | 'en') {
    this.languageService.setLanguage(language);
    localStorage.setItem('language', language);
   
  }
  getText(es: string, en: string): string {
    return this.isSpanish ? es : en;
  }
}
