import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { LenguajeServiceService } from '../../services/lenguaje-service.service';
import { ThemeService } from '../../services/theme.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { LanguajeBottomComponent } from '../../components/languaje-bottom/languaje-bottom.component';


interface Project {
  id: number;
  title: { es: string; en: string };
  description: { es: string; en: string };
  imageUrl: string;
  videoUrl?: string;
  technologies: string[];
  imgHover?: string;
  liveUrl?: string;
  githubUrl?: string;
}


@Component({
  selector: 'app-projects',
  imports: [HeaderComponent,LanguajeBottomComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})


export class ProjectsComponent {
 @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;

  isDarkTheme: boolean = false;
  projects: Project[] = [
    {
      id: 1,
        title: { es: 'Hairbooking', en: 'Hairbooking' },
      description: { es: 'Aplicación web para reservar citas de peluquería.', en: 'A web application for booking hair appointments.' },
     imageUrl: '../../../../images/hairbooking.png',
      imgHover: '../../../../images/reservas.png',
      technologies: ['Angular', 'PHP' , 'HTML', 'MySQL' , 'Bootstrap'],
      liveUrl: 'https://hairbooking.vercel.app/index',
      githubUrl: 'https://github.com/marcosvallecillos/Hairbooking'
    },
    {
      id:2,
    title: { es: 'Club de Lucha', en: 'Fight Club' },
      description: { es: 'Aplicación web para gestionar un club de lucha.', en: 'A web application for managing a fight club.' },
      imageUrl: '../../../../images/clubdelucha.png',
      imgHover: '../../../../images/reservas.png',
      technologies: ['Angular', 'PHP' , 'HTML', 'MySQL' , 'Bootstrap'],
      liveUrl: 'https://hairbooking.vercel.app/index',
      githubUrl: 'https://github.com/PauHernandezFort/proyectoFront'
    },
    {
      id:2,
     title: { es: 'PlayaFinder', en: 'BeachFinder' },
      description: { es: 'Aplicación web para encontrar playas.', en: 'A web application for finding beaches.' },
      
      imageUrl: '../../../../images/clubdelucha.png',
      imgHover: '../../../../images/reservas.png',
      technologies: ['PHP' , 'HTML', 'MySQL'],
      liveUrl: 'https://hairbooking.vercel.app/index',
      githubUrl: 'https://github.com/PauHernandezFort/proyectoFront'
    }
    // Add more projects here
  ];

  isSpanish: boolean = true;
  
    constructor(
      private languageService: LenguajeServiceService,
      private themeService: ThemeService,
      private router: Router
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

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  goBack() {
    this.router.navigate(['/']); // Navigate to the home page
  }
}
