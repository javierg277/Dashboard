// En tu componente de Angular
import { Component } from '@angular/core';
import { JsReportService } from '../js.service';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent {
  paramsForm: FormGroup;
  

  constructor(private http: HttpClient, private jsReportService: JsReportService) {
    this.paramsForm = new FormGroup({
      sellerName: new FormControl(''),
      sellerRoad: new FormControl(''),
      sellerCountry: new FormControl(''),
      buyerName: new FormControl(''),
      buyerRoad: new FormControl(''),
      buyerCountry: new FormControl(''),
      invoiceNumber: new FormControl(''),
    });
  }
  formData = {
    seller: {
      name: '',
      road: '',
      country: '',
    },
    buyer: {
      name: '',
      road: '',
      country: '',
    },
    number: ''
  };
  


  pdfFile: Blob = new Blob();

  
  

  ngOnInit() {
    this.showTemplates();
  }
  submitForm() {
    const templateName = 'invoice-main';
    const datosInforme = this.formData;
    console.log(datosInforme);

    

  
    this.jsReportService.generarInforme(templateName, datosInforme).subscribe(
      (respuesta) => {
        // Guarda el PDF como un Blob
        this.pdfFile = new Blob([respuesta], { type: 'application/pdf' });
      },
      (error) => {
        // Manejar errores
        console.error('Error al generar el informe', error);
      }
    );
  }
  
  generarInformeOrder() {
    const templateName = 'orders-main';
    const datosInforme = {};
  
    this.jsReportService.generarInforme(templateName, datosInforme).subscribe(
      (respuesta) => {
        // Guarda el PDF como un Blob
        this.pdfFile = new Blob([respuesta], { type: 'application/pdf' });
      },
      (error) => {
        // Manejar errores
        console.error('Error al generar el informe', error);
      }
    );
  }

  generarInformeInvoice() {
    const templateName = 'invoice-main';
    const datosInforme = {
      
        "number": "123",
        "seller": {
            "name": "Next Step Webs, Inc.",
            "road": "12345 Sunny Road",
            "country": "Sunnyville, TX 12345"
        },
        "buyer": {
            "name": "Acme Corp.",
            "road": "16 Johnson Road",
            "country": "Paris, France 8060"
        },
        "items": [{
            "name": "Website design",
            "price": 300
        }]
    
    };
  
    this.jsReportService.generarInforme(templateName, datosInforme).subscribe(
      (respuesta) => {
        // Guarda el PDF como un Blob
        this.pdfFile = new Blob([respuesta], { type: 'application/pdf' });
      },
      (error) => {
        // Manejar errores
        console.error('Error al generar el informe', error);
      }
    );
  }
    generarInformeSales() {
      const templateName = 'sales-main';
      const datosInforme = {
        
          "customer": "Walker Group",
          "month": "April",
          "taxPercentage": 0.20,
          "detail": [{
              "date": "2019-04-03",
              "product": "Vitamin C",
              "category": "Health",
              "unitPrice": 25,
              "quantity": 1,
              "discountPercentage": 0 
          }, {
              "date": "2019-04-03",
              "product": "Probiotics",
              "category": "Health",
              "unitPrice": 83,
              "quantity": 1,
              "discountPercentage": 0.25
          }, {
              "date": "2019-04-04",
              "product": "Mild Bubble Cleanser",
              "category": "Cleansing",
              "unitPrice": 13,
              "quantity": 2,
              "discountPercentage": 0
          }, {
              "date": "2019-04-04",
              "product": "Deep Cleanser",
              "category": "Cleansing",
              "unitPrice": 12,
              "quantity": 3,
              "discountPercentage": 0
          }, {
              "date": "2019-04-04",
              "product": "Atomy Men Set",
              "category": "Men Skin Care",
              "unitPrice": 54,
              "quantity": 1,
              "discountPercentage": 0.35
          }, {
              "date": "2019-04-09",
              "product": "BB Cream",
              "category": "Make-Up",
              "unitPrice": 12,
              "quantity": 3,
              "discountPercentage": 0
          }, {
              "date": "2019-04-15",
              "product": "Lipstick Poppy",
              "category": "Make-Up",
              "unitPrice": 22,
              "quantity": 1,
              "discountPercentage": 0
          }, {
              "date": "2019-04-15",
              "product": "Healthy Glow Base",
              "category": "Make-Up",
              "unitPrice": 18,
              "quantity": 2,
              "discountPercentage": 0.12
          }, {
              "date": "2019-04-26",
              "product": "Lotion",
              "category": "Skin Care",
              "unitPrice": 23,
              "quantity": 1,
              "discountPercentage": 0
          }]
      }
  
      this.jsReportService.generarInforme(templateName, datosInforme).subscribe(
        (respuesta) => {
          // Cambia el tipo de contenido a 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' para Excel
          const blob = new Blob([respuesta], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          const url = window.URL.createObjectURL(blob);
          // Crea un enlace y descarga el archivo Excel
          const link = document.createElement('a');
          link.href = url;
          link.download = 'Sales.xlsx'; 
          link.click();
          window.URL.revokeObjectURL(url);
        },
        (error) => {
          // Manejar errores
          console.error('Error al generar el informe', error);
        }
      );
    }
    showTemplates() {
      this.jsReportService.getTemplates().subscribe(
        (respuesta: any) => {
          // Muestra los nombres de los templates en la consola
          respuesta.value.forEach((template: any) => {
            console.log(template.name);
          });
        },
        (error: any) => {
          // Manejar errores
          console.error('Error al obtener los templates', error);
        }
      );
    }
  }
