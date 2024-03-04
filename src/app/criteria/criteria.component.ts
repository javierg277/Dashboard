import { ChangeDetectorRef, Component } from '@angular/core';
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
  criterion = { type1: 'text', value: '' };
  report: any;
  name: any;
  criteria: any;
  pdfFile: string = '';
  constructor(private cdr: ChangeDetectorRef,private jsReportService: JsReportService,private route: ActivatedRoute,private emailService: EmailService, private reportService: ReportService){ }

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
  this.cdr.detectChanges();
  const inputValue = this.criterion.value;
  console.log('inputValue:', inputValue);
  
  console.log('La función generarInformeInvoice se ha llamado.');
  const templateName = 'invoice-main';
const datosInforme ={data: [{"cajero":"ALCOY PAUSE+",
"servicios":[{
    "servicio":"embedded","Fecha":"2023-03-14T09:24:28","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-15T14:20:55","Estado":"CANCELADO"},
    {"servicio":"embedded","Fecha":"2023-03-14T09:30:03","Estado":"INICIADO"},
    {"servicio":"municipal-taxes","Fecha":"2023-03-14T09:29:29","Estado":"CANCELADO"},
    {"servicio":"receipts-list","Fecha":"2023-03-14T09:27:01","Estado":"CANCELADO"},
    {"servicio":"municipal-taxes","Fecha":"2023-03-14T09:26:04","Estado":"CANCELADO"},
    {"servicio":"embedded","Fecha":"2023-03-13T23:19:06","Estado":"CANCELADO"},
    {"servicio":"embedded","Fecha":"2023-03-13T23:12:39","Estado":"INICIADO"},
    {"servicio":"embedded","Fecha":"2023-03-15T14:23:38","Estado":"CANCELADO"},
    {"servicio":"receipts-list","Fecha":"2023-03-13T23:50:06","Estado":"CANCELADO"},
    {"servicio":"embedded","Fecha":"2023-03-13T23:02:44","Estado":"CANCELADO"},
    {"servicio":"municipal-taxes","Fecha":"2023-03-13T23:02:27","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-13T23:01:55","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-13T23:01:37","Estado":"CANCELADO"},
    {"servicio":"municipal-taxes","Fecha":"2023-03-13T22:56:00","Estado":"CANCELADO"},
    {"servicio":"municipal-taxes","Fecha":"2023-03-13T22:53:53","Estado":"CANCELADO"},
    {"servicio":"municipal-taxes","Fecha":"2023-03-13T22:53:36","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-13T22:53:30","Estado":"CANCELADO"},
    {"servicio":"municipal-taxes","Fecha":"2023-03-15T14:14:33","Estado":"CANCELADO"},
    {"servicio":"embedded","Fecha":"2023-03-15T09:51:11","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-15T09:51:07","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-15T09:47:48","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-15T09:37:09","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-15T09:36:14","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-15T14:20:42","Estado":"CANCELADO"},
    {"servicio":"receipts-list","Fecha":"2023-03-13T23:38:58","Estado":"CANCELADO"},
    {"servicio":"receipts-list","Fecha":"2023-03-13T23:31:27","Estado":"CANCELADO"},
    {"servicio":"receipts-list","Fecha":"2023-03-13T23:26:33","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-13T23:24:35","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-13T23:21:52","Estado":"CANCELADO"},
    {"servicio":"municipal-taxes","Fecha":"2023-03-13T23:21:39","Estado":"CANCELADO"},
    {"servicio":"embedded","Fecha":"2023-03-13T23:21:15","Estado":"CANCELADO"},
    {"servicio":"embedded","Fecha":"2023-03-13T23:10:30","Estado":"INICIADO"},
    {"servicio":"embedded","Fecha":"2023-03-13T23:08:46","Estado":"INICIADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-14T09:24:23","Estado":"CANCELADO"},
    {"servicio":"municipal-taxes","Fecha":"2023-03-14T09:24:13","Estado":"CANCELADO"},
    {"servicio":"receipts-list","Fecha":"2023-03-14T09:23:49","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-14T09:23:07","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-14T09:22:15","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-14T09:19:29","Estado":"CANCELADO"},
    {"servicio":"municipal-taxes","Fecha":"2023-03-14T09:19:23","Estado":"CANCELADO"},
    {"servicio":"receipts-list","Fecha":"2023-03-15T14:47:24","Estado":"CANCELADO"},
    {"servicio":"embedded","Fecha":"2023-03-15T14:25:15","Estado":"CANCELADO"},
    {"servicio":"receipts-list","Fecha":"2023-03-15T14:23:14","Estado":"CANCELADO"},
    {"servicio":"municipal-taxes","Fecha":"2023-03-15T14:19:40","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-15T14:15:03","Estado":"CANCELADO"},
    {"servicio":"receipts-list","Fecha":"2023-03-14T09:29:58","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-14T09:29:46","Estado":"CANCELADO"},
    {"servicio":"municipal-taxes","Fecha":"2023-03-14T09:29:37","Estado":"CANCELADO"},
    {"servicio":"municipal-census","Fecha":"2023-03-14T09:27:53","Estado":"CANCELADO"},
    {"servicio":"municipal-taxes","Fecha":"2023-03-14T09:26:16","Estado":"CANCELADO"},
    {"servicio":"receipts-list","Fecha":"2023-03-14T09:25:59","Estado":"CANCELADO"},
    {"servicio":"municipal-taxes","Fecha":"2023-03-14T09:25:09","Estado":"CANCELADO"}]},
    {"cajero":"ALICANTE PAUSE+",
    "servicios":[{
      "servicio":"embedded","Fecha":"2023-05-19T14:01:42","Estado":"INICIADO"},{"servicio":"embedded","Fecha":"2023-05-19T14:01:02","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-19T14:00:44","Estado":"INICIADO"},{"servicio":"embedded","Fecha":"2023-05-19T14:00:24","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-19T13:58:58","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-19T13:58:26","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-19T13:37:01","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-19T13:36:39","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-19T13:31:30","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-19T13:31:25","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-22T10:02:14","Estado":"INICIADO"},{"servicio":"embedded","Fecha":"2023-05-22T09:53:27","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-22T09:50:52","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-22T09:40:33","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-22T09:37:13","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-22T09:33:10","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-22T09:25:15","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-22T09:24:06","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-22T09:21:20","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-22T09:21:10","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-22T09:20:21","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-22T09:20:13","Estado":"CANCELADO"},{"servicio":"generic-instance","Fecha":"2023-05-24T10:52:28","Estado":"CANCELADO"},{"servicio":"generic-instance","Fecha":"2023-05-24T10:50:18","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-19T11:32:09","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-19T11:19:23","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-19T11:19:18","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-19T11:08:11","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-19T11:07:25","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-19T10:47:16","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-19T10:46:43","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-19T09:38:12","Estado":"INICIADO"},{"servicio":"embedded","Fecha":"2023-05-19T09:36:38","Estado":"CANCELADO"},{"servicio":"receipts-list","Fecha":"2023-04-24T13:00:45","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-24T12:49:44","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-24T12:43:59","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-24T12:41:38","Estado":"CANCELADO"},{"servicio":"municipal-taxes","Fecha":"2023-04-21T12:36:12","Estado":"CANCELADO"},{"servicio":"receipts-list","Fecha":"2023-04-21T11:46:27","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-21T10:24:24","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-20T20:20:18","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-20T20:08:50","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-20T20:05:50","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-20T18:32:32","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-20T18:29:00","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-20T18:16:35","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-20T12:05:44","Estado":"INICIADO"},{"servicio":"municipal-census","Fecha":"2023-04-20T11:44:33","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-20T11:37:51","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-20T11:33:24","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-20T11:32:38","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-04-20T11:32:30","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-04-20T11:27:08","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-04-20T11:27:01","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-20T11:26:31","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-20T08:13:03","Estado":"INICIADO"},{"servicio":"municipal-taxes","Fecha":"2023-04-20T08:12:52","Estado":"CANCELADO"},{"servicio":"municipal-taxes","Fecha":"2023-04-20T08:12:44","Estado":"CANCELADO"},{"servicio":"receipts-list","Fecha":"2023-04-14T09:51:38","Estado":"CANCELADO"},{"servicio":"receipts-list","Fecha":"2023-04-14T09:51:28","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-04-14T09:47:51","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-04-13T14:58:31","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-04-13T14:58:24","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-04-13T14:57:25","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-04-13T14:56:15","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-08-10T11:08:24","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-08-10T11:07:16","Estado":"INICIADO"},{"servicio":"embedded","Fecha":"2023-08-10T11:06:51","Estado":"INICIADO"},{"servicio":"municipal-census","Fecha":"2023-08-10T11:06:19","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-08-10T11:06:09","Estado":"CANCELADO"},{"servicio":"debt-certificates","Fecha":"2023-08-10T11:05:35","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-08-10T11:05:11","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-08-10T11:03:09","Estado":"INICIADO"},{"servicio":"municipal-census","Fecha":"2023-08-10T10:37:10","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-08-10T10:36:57","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-08-09T09:33:42","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-08-09T08:52:26","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-08-09T07:46:57","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-08-08T21:05:17","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-08-08T19:58:12","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-07-11T13:05:45","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-07-11T12:34:14","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-07-11T12:29:51","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-07-11T12:29:41","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-07-11T13:08:48","Estado":"INICIADO"},{"servicio":"embedded","Fecha":"2023-07-11T13:05:23","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-07-11T12:43:10","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-07-11T07:47:48","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-07-11T07:43:59","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-07-11T07:42:10","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-06-13T11:15:08","Estado":"INICIADO"},{"servicio":"embedded","Fecha":"2023-06-13T11:13:37","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-06-13T11:13:16","Estado":"INICIADO"},{"servicio":"embedded","Fecha":"2023-06-13T11:13:06","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-06-13T11:12:18","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-06-13T11:11:04","Estado":"CANCELADO"},{"servicio":"embedded","Fecha":"2023-05-25T14:01:07","Estado":"INICIADO"},{"servicio":"embedded","Fecha":"2023-05-25T13:56:46","Estado":"CANCELADO"},{"servicio":"generic-instance","Fecha":"2023-05-23T11:48:22","Estado":"INICIADO"},{"servicio":"municipal-census","Fecha":"2023-05-23T11:48:08","Estado":"CANCELADO"},{"servicio":"receipts-list","Fecha":"2023-05-23T11:47:36","Estado":"CANCELADO"},{"servicio":"municipal-taxes","Fecha":"2023-05-23T11:47:32","Estado":"CANCELADO"},{"servicio":"municipal-census","Fecha":"2023-05-23T11:47:29","Estado":"CANCELADO"},{"servicio":"generic-instance","Fecha":"2023-05-23T11:46:24","Estado":"CANCELADO"},{"servicio":"municipal-taxes","Fecha":"2023-05-23T11:46:11","Estado":"CANCELADO"},{"servicio":"generic-instance","Fecha":"2023-05-23T11:45:50","Estado":"CANCELADO"},{"servicio":"municipal-taxes","Fecha":"2023-05-23T11:45:39","Estado":"CANCELADO"},{"servicio":"generic-instance","Fecha":"2023-05-23T11:45:24","Estado":"CANCELADO"},{"servicio":"generic-instance","Fecha":"2023-05-23T11:45:02","Estado":"CANCELADO"},{"servicio":"generic-instance","Fecha":"2023-05-23T11:44:49","Estado":"CANCELADO"},{"servicio":"generic-instance","Fecha":"2023-05-23T11:44:27","Estado":"CANCELADO"}]},
      {"cajero":"BSM-C002","servicios":[{"servicio":"Test","Fecha":"2023-02-15T14:32:12","Estado":"INICIADO"},{"servicio":"Test","Fecha":"2023-02-16T11:18:58","Estado":"INICIADO"},{"servicio":"Test","Fecha":"2023-02-16T11:12:38","Estado":"INICIADO"},{"servicio":"Test","Fecha":"2023-02-16T10:51:29","Estado":"INICIADO"},{"servicio":"Test","Fecha":"2023-02-16T10:43:06","Estado":"INICIADO"}]}
    
    ],
    inputValue: this.criterion.value

};
console.log(datosInforme);
  this.jsReportService.generarInforme(templateName, datosInforme) .subscribe((res: any) => {
    const file = new Blob([res], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfFile = fileURL; 
  });
}
}
