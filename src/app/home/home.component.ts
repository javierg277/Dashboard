import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reports: any[] = [];
  dateFilter: string | null = null;
  textFilter: string | null = null;
  filteredReports: any[] = [];
  name: any;
  description: string | undefined;
  name_report: string | undefined;
  url_template: string | undefined;
  sql_criteria: string | undefined;
  reportCriteria: any[] = [];
  selectedReport: any;
  

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.name = localStorage.getItem('name');
    this.getReports(this.name);
  }

  getReports(name: string) {
    this.http.get<any[]>(`http://localhost:5188/Cliente/Get Reports?name=${name}`).subscribe((data: any[]) => {
      this.reports = data;
      this.filterReports();
    });
}








filterReports() {
 
  const filterValue = (this.textFilter || '').toLowerCase();

  this.filteredReports = this.reports.filter(report => {
   
    return report.namE_REPORT1 ? report.namE_REPORT1.toLowerCase().includes(filterValue) : false;
  });
}

   filterReport(report: any) {
    if (this.dateFilter && report.date !== this.dateFilter) {
      return false;
    }
    if (this.textFilter && !report.text.includes(this.textFilter)) {
      return false;
    }
    return true;
  }

  selectReport(id: string) {
    this.router.navigate(['/criteria', id]);
  }
}
