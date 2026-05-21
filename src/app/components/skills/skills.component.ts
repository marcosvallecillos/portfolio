import { Component, HostListener, OnInit } from '@angular/core';
import { LenguajeServiceService } from '../../services/lenguaje-service.service';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-skills',
  imports: [DragDropModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
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
