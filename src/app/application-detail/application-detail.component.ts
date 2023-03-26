import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {
  applications: string[] = [];
  selectedApplication: string | undefined;
  applicationDetails: { key: string, value: string }[] = [];
  highestCost: number = 0;
  averageCost: number = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getApplications().subscribe((data: any) => {
      this.applications = data;

      let totalCost = 0;
      let totalResources = 0;

      for (const app of this.applications) {
        this.apiService.getApplicationByName(app).subscribe((appData: any) => {
          for (const resource of appData) {
            if (resource.Cost && !isNaN(Number(resource.Cost))) {
              const cost = Number(resource.Cost);
              totalCost += cost;
              totalResources++;

              if (cost > this.highestCost) {
                this.highestCost = cost;
              }
            }
          }

          this.averageCost = totalCost / totalResources;
        });
      }
    });
  }

  getApplicationDetails(application: string): void {
    this.selectedApplication = application;
    this.apiService.getApplicationByName(application).subscribe((data: any) => {
      const appDetails = [];
      for (const key in data[0]) {
        appDetails.push({key: key, value: data[0][key]});
      }
      this.applicationDetails = appDetails;
    });
  }
}
