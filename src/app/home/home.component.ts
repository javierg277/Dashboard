// En tu componente de Angular
import { Component } from '@angular/core';
import { JsReportService } from '../js.service';


@Component({
  selector: 'app-tu-componente',
  template: '<button (click)="generarInforme()">Generar Informe</button>'
})
export class HomeComponent {
  constructor(private jsReportService: JsReportService) {}

  generarInforme() {
    const datosInforme = {/* Datos para el informe */};

    this.jsReportService.generarInforme(datosInforme).subscribe(
      (respuesta) => {
        // Abre el PDF en una nueva ventana
        const blob = new Blob([respuesta], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      (error) => {
        // Manejar errores
        console.error('Error al generar el informe', error);
      }
    );
  }
}
