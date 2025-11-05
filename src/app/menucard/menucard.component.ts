import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenusectionComponent } from '../menusection/menusection.component';

@Component({
  selector: 'app-menucard',
  standalone: true,
  imports: [NgIf, NgFor,MenusectionComponent],
  templateUrl: './menucard.component.html',
  styleUrls: ['./menucard.component.scss']
})
export class MenucardComponent {
  desplegado: any;
  comidas: any;
  

  @Input() nombre: string = '';
  @Input() platos! : any[];
  toggleDesplegar() {
    this.desplegado = !this.desplegado;
  }
  
  
  constructor() {
    this.desplegado = false;
    this.comidas = [];
  }
}