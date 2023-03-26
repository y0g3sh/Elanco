import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {
  resources: string[] = [];
  selectedResource: string | undefined;
  resourceDetails: { key: string, value: string }[] = [];
  highestCost: number = 0;
  averageCost: number = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getResources().subscribe((data: any) => {
      this.resources = data;

      let totalCost = 0;
      let totalResources = 0;

      for (const app of this.resources) {
        this.apiService.getResourceByName(app).subscribe((appData: any) => {
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

  getResourceDetails(resource: string): void {
    this.selectedResource = resource;
    this.apiService.getResourceByName(resource).subscribe((data: any) => {
      const resDetails = [];
      for (const key in data[0]) {
        resDetails.push({key: key, value: data[0][key]});
      }
      this.resourceDetails = resDetails;
    });
  }
}
