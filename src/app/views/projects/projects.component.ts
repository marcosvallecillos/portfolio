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
  imageUrl2?: string;
  fecha_creacion?: string;
  fecha_fin?: string;
  technologies: string[];
  imgHover?: string;
  liveUrl?: string;
  placeholder?: string;
  githubUrl?: string;
}


@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})


export class ProjectsComponent {
 @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;

  isDarkTheme: boolean = false;
  projects: Project[] = [
    
    {
      id: 1,
      fecha_creacion: '08-2025',
      fecha_fin: '03-2026',
      title: { es: 'Desarrollador Freelance · Chatbot & Desarrollo Web', en: 'Freelance Developer · Chatbot & Web Development' },
      description: {
        es: 'Asistente 24/7 con WhatsApp Business API que automatiza el 100% de la atención inicial. Gestión de flota de 32 vehículos, calculadora de financiación, captación de leads y panel de administración en tiempo real.',
        en: '24/7 assistant with WhatsApp Business API automating 100% of initial customer service. 32-vehicle fleet management, financing calculator, lead capture, and real-time admin panel.'
      },
      imageUrl: '/images/admin_chatbot.png',
      imageUrl2: '/images/image.png',
      technologies: ['Python', 'FastAPI', 'MySQL', 'WhatsApp API', 'Railway', 'REST API'],
      liveUrl: '',
      githubUrl: ''
    },
    {
      id: 2,
      fecha_creacion: '07-2025',
      fecha_fin: '07-2025',
      title: { es: 'HerrajeSalimer', en: 'HerrajeSalimer' },
      description: {
        es: 'Motor de búsqueda inteligente y CRUD para inventario de herrajes de muebles de alta rotación.',
        en: 'Intelligent search engine and CRUD for high-turnover furniture hardware inventory.'
      },
      imageUrl: '../../../../images/herrajesSalimer.jpeg',
      technologies: ['Angular', 'Symfony', 'MySQL', 'Bootstrap'],
      liveUrl: 'https://herrajesalimer.vercel.app/home',
      githubUrl: 'https://github.com/marcosvallecillos/herrajeSalimer_front'
    },  
    {
      id: 3,
      fecha_creacion: '27-03-2025',
      fecha_fin: '27-06-2025',
        title: { es: 'Hairbooking', en: 'Hairbooking' },
      description: { es: ' Proyecto individual que consiste en un sistema online para barberías que facilita la gestión, las reservas de clientes y la venta de productos.',
                     en: 'Individual project consisting of an online system for barbershops that facilitates management, customer reservations and product sales.' },
     imageUrl: '../../../../images/hairbooking.png',
      imgHover: '../../../../images/reservas.png',
      technologies: ['Angular', 'Symfony', 'MySQL', 'Bootstrap'],
      liveUrl: 'https://hairbooking.vercel.app/index',
      githubUrl: 'https://github.com/marcosvallecillos/Hairbooking'
    },
    {
      id:4,
      fecha_creacion: '11-02-2025',
      fecha_fin: '25-02-2025',
      title: { es: 'Club de Lucha', en: 'Fight Club' },
      description: {
        es: 'Plataforma de gestión deportiva para socios, competiciones y cuotas.',
        en: 'Sports management platform for members, competitions, and fees.'
      },
      imageUrl: '../../../../images/clubdelucha.png',
      imgHover: '../../../../images/reservas.png',
      technologies: ['Angular', 'Symfony', 'MySQL'],
      liveUrl: 'https://clubdelucha.vercel.app/home',
      githubUrl: 'https://github.com/PauHernandezFort/proyectoFront'
    },
    {
      id:5,
      fecha_creacion: '11-5-2024',
      fecha_fin: '25-05-2024',
      title: { es: 'PlayaFinder', en: 'BeachFinder' },
      description: {
        es: 'Red social geolocalizada para descubrir y valorar playas con sistema de recomendaciones.',
        en: 'Geolocated social network to discover and rate beaches with a recommendation system.'
      },
      imageUrl: '../../../../images/flayafinder.jpg',
      technologies: ['PHP', 'HTML5', 'MySQL'],
      liveUrl: '',
      githubUrl: 'https://github.com/MarcCO2005/PlayaFinder'
    },
  ];

  isSpanish: boolean = true;
  private carouselIndexes: Record<number, number> = {};

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

  getCarouselIndex(projectId: number): number {
    return this.carouselIndexes[projectId] ?? 0;
  }

  setSlide(projectId: number, index: number, event?: Event): void {
    event?.stopPropagation();
    this.carouselIndexes = { ...this.carouselIndexes, [projectId]: index };
  }

  nextSlide(projectId: number, event?: Event): void {
    event?.stopPropagation();
    const next = (this.getCarouselIndex(projectId) + 1) % 2;
    this.setSlide(projectId, next);
  }

  prevSlide(projectId: number, event?: Event): void {
    event?.stopPropagation();
    const prev = (this.getCarouselIndex(projectId) - 1 + 2) % 2;
    this.setSlide(projectId, prev);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
