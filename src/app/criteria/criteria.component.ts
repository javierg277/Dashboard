import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../report.service';
import { CommonModule } from '@angular/common';
import { EmailService } from '../EmailService';
import { JsReportService } from '../js.service';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrl: './criteria.component.scss'
})
export class CriteriaComponent {
  criterion = { type1: 'text', value: '' };
  report: any;
  name: any;
  criteria: any;
  pdfFile: string = '';
  file!: Blob;
  constructor(private cdr: ChangeDetectorRef, private jsReportService: JsReportService, private route: ActivatedRoute, private emailService: EmailService, private reportService: ReportService, private http: HttpClient) { }

  ngOnInit() {
    this.name = localStorage.getItem('name');
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.reportService.getReportById(id).subscribe(reportArray => {
      this.report = reportArray[0];
      console.log(this.report);
      console.log(this.report.namE_REPORT1);
      console.log(this.report.iD1);

      // Usar getReportCriteria
      this.reportService.getReportsCrit(id).subscribe(criteriaArray => {
        this.criteria = criteriaArray;
        console.log(this.criteria);
      });
    });

  }

  sendEmail() {
    if (!this.file) return;
    this.emailService.sendEmail(this.file).subscribe(response => {
      console.log('Correo electrónico enviado');
    }, error => {
      console.log('Error al enviar el correo electrónico', error);
    });
  }
  MandarCorreo() {
    console.log(this.pdfFile);
    return this.http.post('http://localhost:5188/SendEmail', { url: this.pdfFile }).subscribe(

    );

  }


  async generarInformeInvoice(id: number) {
    await this.http.post(`http://localhost:5188/Cliente/repot/detail/${id}`, {}).toPromise().then(response => {
      const result = response as any;
      console.log('La función generarInformeInvoice se ha llamado.');
      const templateName = 'invoice-main';
      const datosInforme={
        data:  JSON.parse(result.data)
      }
      
      console.log(result);
      console.log(templateName);
      console.log(datosInforme);
      this.jsReportService.generarInforme(templateName, datosInforme).subscribe((res: any) => {
        this.file = new Blob([res], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(this.file);
        this.pdfFile = fileURL;
        console.log(this.pdfFile);
      });
    }, error => {
      console.log('Error al generar el informe.');
      console.log(this.jsReportService.generarInforme);
      // Maneja el error aquí
      console.error(error);
    });
  }
}
