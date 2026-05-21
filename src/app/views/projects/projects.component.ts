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
      id:1,
      fecha_creacion: '17-08-2025',
      fecha_fin: '25-03-2025',
      title: { es: 'Desarrollador Freelance · Chatbot & Desarrollo Web', en: 'Freelance Developer · Chatbot & Web Development' },
      description: { es: ' Desarrollo e implementación en producción de asistente conversacional 24/7 para empresa del sector automoción mediante WhatsApp Business API. Automatización de atención comercial, gestión dinámica de catálogo de vehículos, simulador de financiación, reserva de citas y captación automatizada de leads. Desarrollo de panel administrativo con conversaciones en tiempo real, recordatorios automáticos y seguimiento de clientes.',
                     en: 'Development and production implementation of a 24/7 conversational assistant for a company in the automotive sector using WhatsApp Business API. Automation of sales support, dynamic vehicle catalog management, financing simulator, appointment scheduling, and automated lead capture. Development of an administration panel with real-time conversations, automatic reminders, and customer follow-up.' },
      imageUrl: '../../../../images/flexemcar_admin.png',
      technologies: ['Python 3.11' , 'FastAPI' , 'MySQL' , 'WhatsApp Business API' , 'Meta API REST API'],
      placeholder: 'en produccion...',
      liveUrl: 'https://admin-flexemcar.up.railway.app/admin',
    },{
      id:2,
      fecha_creacion: '11-07-2025',
      fecha_fin: '25-07-2025',
      title: { es: 'HerrajeSalimer', en: 'HerrajeSalimer' },
      description: { es: 'Plataforma web que permite visualizar los herrajes de cada mueble a través de un buscador intuitivo. Además, ofrece funcionalidades de gestión de muebles, como la creación, edición y eliminación de registros, lo que facilita el control y la organización del inventario.',
                     en: 'Web platform that allows you to view the hardware of each piece of furniture through an intuitive search engine. In addition, it offers furniture management functionalities, such as creating, editing and deleting records, which facilitates inventory control and organization.' },
      imageUrl: '../../../../images/herrajesSalimer.jpeg',
      technologies: ['Angular', 'Symfony' , 'HTML', 'MySQL' , 'Bootstrap'],
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
      technologies: ['Angular', 'Symfony' , 'HTML', 'MySQL' , 'Bootstrap'],
      liveUrl: 'https://hairbooking.vercel.app/index',
      githubUrl: 'https://github.com/marcosvallecillos/Hairbooking'
    },
    
    {
      id:4,
      fecha_creacion: '11-02-2025',
      fecha_fin: '25-02-2025',
      title: { es: 'Club de Lucha', en: 'Fight Club' },
      description: { es: 'Proyecto en grupo que consiste en una aplicación web para gestionar un club de lucha.',
                     en: 'Group project consisting of a web application to manage a fight club.' },
      imageUrl: '../../../../images/clubdelucha.png',
      imgHover: '../../../../images/reservas.png',
      technologies: ['Angular', 'Symfony' , 'HTML', 'MySQL' , 'Bootstrap'],
      liveUrl: 'https://clubdelucha.vercel.app/home',
      githubUrl: 'https://github.com/PauHernandezFort/proyectoFront'
    },
    {
      id: 5,
      fecha_creacion: '11-5-2024',
      fecha_fin: '25-05-2024',
      title: { es: 'PlayaFinder', en: 'BeachFinder' },
      description: { es: 'Proyecto en grupo que consiste en una plataforma web para descubrir playas y conocer las experiencias de otros viajeros',
                     en: 'Group project consisting of a web platform to discover beaches and learn about the experiences of other travelers.' },
      imageUrl: '../../../../images/flayafinder.jpg',
      technologies: ['PHP' , 'HTML', 'MySQL'],
      liveUrl: '',
      githubUrl: 'https://github.com/MarcCO2005/PlayaFinder'
    },
    
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
