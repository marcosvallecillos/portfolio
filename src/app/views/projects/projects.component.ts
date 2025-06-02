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
  fecha_creacion?: string;
  fecha_fin?: string;
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
      fecha_creacion: '27-03-2025',
      fecha_fin: '27-06-2025',
        title: { es: 'Hairbooking', en: 'Hairbooking' },
      description: { es: ' Proyecto individual que consiste en un sistema online para barberías que facilita la gestión, las reservas de clientes y la venta de productos.',
                     en: 'Individual project consisting of an online system for barbershops that facilitates management, customer reservations and product sales.' },
     imageUrl: '../../../../images/hairbooking.png',
      imgHover: '../../../../images/reservas.png',
      technologies: ['Angular', 'PHP' , 'HTML', 'MySQL' , 'Bootstrap'],
      liveUrl: 'https://hairbooking.vercel.app/index',
      githubUrl: 'https://github.com/marcosvallecillos/Hairbooking'
    },
    {
      id:2,
      fecha_creacion: '11-02-2025',
      fecha_fin: '25-02-2025',
      title: { es: 'Club de Lucha', en: 'Fight Club' },
      description: { es: 'Proyecto en grupo que consiste en una aplicación web para gestionar un club de lucha.',
                     en: 'Group project consisting of a web application to manage a fight club.' },
      imageUrl: '../../../../images/clubdelucha.png',
      imgHover: '../../../../images/reservas.png',
      technologies: ['Angular', 'PHP' , 'HTML', 'MySQL' , 'Bootstrap'],
      liveUrl: 'https://hairbooking.vercel.app/index',
      githubUrl: 'https://github.com/PauHernandezFort/proyectoFront'
    },
    {
      id:2,
      fecha_creacion: '11-5-2024',
      fecha_fin: '25-05-2024',
      title: { es: 'PlayaFinder', en: 'BeachFinder' },
      description: { es: 'Proyecto en grupo que consiste en una plataforma web para descubrir playas y conocer las experiencias de otros viajeros',
                     en: 'Group project consisting of a web platform to discover beaches and learn about the experiences of other travelers.' },
      imageUrl: '../../../../images/flayafinder.jpg',
      technologies: ['PHP' , 'HTML', 'MySQL'],
      liveUrl: 'Website not available',
      githubUrl: 'https://github.com/MarcCO2005/PlayaFinder'
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
