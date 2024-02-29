import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../report.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-criteria',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './criteria.component.html',
  styleUrl: './criteria.component.scss'
})
export class CriteriaComponent 
{
  report: any;
  name: any;
  criteria: any;
  constructor(private route: ActivatedRoute, private reportService: ReportService){ }

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
}
