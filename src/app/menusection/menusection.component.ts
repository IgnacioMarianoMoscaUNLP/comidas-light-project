import { Component, OnInit } from '@angular/core';
import { MenucardComponent } from '../menucard/menucard.component';
import { NgFor, NgIf } from '@angular/common';
import { MENU_DATA } from '../menu_data';
import { PackSelectorService } from '../services/pack-selector.service';

@Component({
  selector: 'app-menusection',
  standalone: true,
  imports: [NgFor, NgIf, MenucardComponent],
  templateUrl: './menusection.component.html',
  styleUrl: './menusection.component.scss'
})
export class MenusectionComponent implements OnInit {
  menuCategories = MENU_DATA;
  packActual: number | null = null;

  constructor(public packService: PackSelectorService) {}

  ngOnInit() {
    this.packService.packSeleccionado.subscribe(pack => {
      this.packActual = pack;
    });
  }

  seleccionarPack(cantidad: number) {
    this.packService.seleccionarPack(cantidad);
  }
}
