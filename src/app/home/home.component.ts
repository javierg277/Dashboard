import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getReports();
    this.name = localStorage.getItem('username');
  }

  getReports() {
    this.http.get<any[]>('http://localhost:5188/api').subscribe((data: any[]) => {
      this.reports = data;
      this.filterReports();
    });
  }

  filterReports() {
    this.filteredReports = this.reports.filter(report => this.filterReport(report));
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
}