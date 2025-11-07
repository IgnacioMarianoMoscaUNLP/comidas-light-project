import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackSelectorService } from '../services/pack-selector.service';

@Component({
  selector: 'app-pack-selector-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pack-selector-bar" *ngIf="packActual">
      <div class="bar-content">
        <!-- Mostrar progreso -->
        <div class="progress-info">
          <span class="label">Seleccionadas:</span>
          <span class="counter">{{ totalActual }}/{{ packActual }}</span>
        </div>

        <!-- Barra visual -->
        <div class="progress-bar">
          <div class="progress-fill" [style.width.%]="(totalActual / packActual) * 100"></div>
        </div>

        <!-- Botón WhatsApp -->
        <button 
          class="btn-whatsapp"
          [disabled]="totalActual !== packActual"
          (click)="abrirWhatsApp()"
          [title]="totalActual !== packActual ? 'Completa tu selección' : 'Hacer pedido'"
        >
          <span class="icon">💬</span>
          <span class="text">Pedir ahora</span>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./pack-selector-bar.component.scss']
})
export class PackSelectorBarComponent implements OnInit {
  packActual: number | null = null;
  totalActual = 0;

  constructor(private packService: PackSelectorService) {}

  ngOnInit() {
    this.packService.packSeleccionado.subscribe(pack => {
      this.packActual = pack;
    });

    this.packService.platosSeleccionados.subscribe(() => {
      this.totalActual = this.packService.getTotalActual();
    });
  }

  abrirWhatsApp() {
    const mensaje = this.packService.generarMensajeWhatsApp();
    const numero = '5492215963237'; // WhatsApp de Comidas Light
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
}
