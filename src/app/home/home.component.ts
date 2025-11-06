import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { ɵEmptyOutletComponent } from "@angular/router";
import { MenusectionComponent } from '../menusection/menusection.component';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ɵEmptyOutletComponent, MenusectionComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  whatsappLink: string;
  instagramLink: string;
  facebookLink: string;
  businessName: string;
  
  // Beneficios principales
  benefits = [
    {
      icon: 'assets/images/comida-saludable.png',
      title: 'Viandas Saludables',
      description: 'Hiposódicas, hipograsas e hipocalóricas. Perfectas para tu plan de alimentación.'
    },
    {
      icon: 'assets/images/frezzer.png',
      title: 'Freezadas y Frescas',
      description: 'Elaboradas con los mejores ingredientes. Listas para consumir cuando las necesites.'
    },
    {
      icon: 'assets/images/nutricionista-icon.png',
      title: 'Respaldo Nutricional',
      description: 'Asesoramiento personalizado con nuestra nutricionista. Más de 15 años de experiencia.'
    },
    {
      icon: 'assets/images/home-icon.png',
      title: 'Entrega a Domicilio',
      description: 'Servicio de delivery en La Plata y alrededores. Tu alimentación sin complicaciones.'
    }
  ];
isMenuOpen: any;
secciones: any;

  constructor() {
    const phone = environment.whatsappNumber;
    const message = encodeURIComponent(environment.whatsappMessage);
    this.whatsappLink = `https://wa.me/${phone}?text=${message}`;
    this.instagramLink = environment.instagramUrl;
    this.facebookLink = environment.facebookUrl;
    this.businessName = environment.businessName;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openWhatsApp(): void {
    window.open(this.whatsappLink, '_blank');
  }
}