import { Component, Output } from '@angular/core';
import { MenucardComponent } from '../menucard/menucard.component';
import { NgFor, NgIf } from '@angular/common';
import { MENU_DATA } from '../menu_data';

@Component({
  selector: 'app-menusection',
  standalone: true,
  imports: [NgFor, NgIf,MenucardComponent],
  templateUrl: './menusection.component.html',
  styleUrl: './menusection.component.scss'
})
export class MenusectionComponent {
  menuCategories = MENU_DATA;


}

