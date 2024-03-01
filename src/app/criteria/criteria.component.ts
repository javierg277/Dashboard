import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../report.service';
import { CommonModule } from '@angular/common';
import { EmailService } from '../EmailService';
import { JsReportService } from '../js.service';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrl: './criteria.component.scss'
})
export class CriteriaComponent 
{
  report: any;
  name: any;
  criteria: any;
  pdfFile: string = '';
  constructor(private jsReportService: JsReportService,private route: ActivatedRoute,private emailService: EmailService, private reportService: ReportService){ }

  ngOnInit() {
    this.name = localStorage.getItem('name');
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.reportService.getReportById(id).subscribe(reportArray => {
      this.report = reportArray[0];
      console.log(this.report);
      console.log(this.report.namE_REPORT1);

        // Usar getReportCriteria
  this.reportService.getReportsCrit(id).subscribe(criteriaArray => {
    this.criteria = criteriaArray;
    console.log(this.criteria);
    });
  });

}

sendEmail() {
  this.emailService.sendEmail().subscribe(response => {
    console.log('Correo electrónico enviado');
  }, error => {
    console.log('Error al enviar el correo electrónico', error);
  });
}

generarInformeInvoice() {
  console.log(this.report);
  console.log('La función generarInformeInvoice se ha llamado.');
  const templateName = 'invoice-main';
  const datosInforme = {
    "iD1": this.report.iD1,
    "namE_REPORT1": this.report.namE_REPORT1,
    "descriptioN1": this.report.descriptioN1,
    "urL_TEMPLATE1": this.report.urL_TEMPLATE1,
    "sqL_CRITERIA1": this.report.sqL_CRITERIA1
  };
  this.jsReportService.generarInforme(templateName, datosInforme) .subscribe((res: any) => {
    const file = new Blob([res], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfFile = fileURL; 
  });
}
}
