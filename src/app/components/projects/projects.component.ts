import { Component, ElementRef, ViewChildren, QueryList, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenguajeServiceService } from '../../services/lenguaje-service.service';
import { RouterLink } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,RouterLink, DragDropModule ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  isSpanish: boolean = true;
  isMobile: boolean = false;

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
