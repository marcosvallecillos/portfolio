import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { LenguajeServiceService } from '../../services/lenguaje-service.service';
import { ThemeService } from '../../services/theme.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { LanguajeBottomComponent } from '../../components/languaje-bottom/languaje-bottom.component';


interface Project {
  id: number;
  title: string;
  description: string;
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
      title: 'Hairbooking',
      description:this.getText(
        'Una aplicación que permite gestionar las reservas de un salón de peluquería',
        'A web application for managing a hair salon booking system'
      ),
      imageUrl: '../../../../images/hairbooking.png',
      imgHover: '../../../../images/reservas.png',
      technologies: ['Angular', 'PHP' , 'HTML', 'MySQL' , 'Bootstrap'],
      liveUrl: 'https://hairbooking.vercel.app/index',
      githubUrl: 'https://github.com/marcosvallecillos/Hairbooking'
    },
    {
      id:2,
      title: 'Club de Lucha',
      description: this.getText(
        'Una aplicación web para gestionar un club de lucha',
        'A web application for managing a fight club'
      ),
      imageUrl: '../../../../images/clubdelucha.png',
      imgHover: '../../../../images/reservas.png',
      technologies: ['Angular', 'PHP' , 'HTML', 'MySQL' , 'Bootstrap'],
      liveUrl: 'https://hairbooking.vercel.app/index',
      githubUrl: 'https://github.com/PauHernandezFort/proyectoFront'
    },
    {
      id:2,
      title: 'PlayaFinder',
      description: this.getText(
        'Es una aplicación que permite buscar playas cercanas y consultar su información',
        'It is an application that allows you to search nearby beaches and check their information'
      ),
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
