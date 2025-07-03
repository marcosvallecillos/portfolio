import { Component } from '@angular/core';
import { LenguajeServiceService } from '../../services/lenguaje-service.service';
import { NgClass } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-languaje-bottom',
  imports: [NgClass, DragDropModule],
  templateUrl: './languaje-bottom.component.html',
  styleUrl: './languaje-bottom.component.css'
})
export class LanguajeBottomComponent {

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
}
