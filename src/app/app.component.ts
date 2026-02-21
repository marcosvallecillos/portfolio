import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LenguajeServiceService } from './services/lenguaje-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DragDropModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular19_flowbite';

   ngOnInit(): void {
    initFlowbite();
  }
  isSpanish: boolean = true;
  
    constructor(
      private languageService: LenguajeServiceService,
      public router:Router,
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
