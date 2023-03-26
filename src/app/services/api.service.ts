import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URL = 'https://engineering-task.elancoapps.com/api';

  constructor(private httpClient: HttpClient) { }

  getApplications(): Observable<Object> {
    return this.httpClient.get<string[]>(`${this.API_URL}/applications`);
  }

  getApplicationByName(name: string): Observable<Object> {
    return this.httpClient.get(`${this.API_URL}/applications/${name}`);
  }

  getResources(): Observable<Object> {
    return this.httpClient.get(`${this.API_URL}/resources`);
  }

  getResourceByName(name: string): Observable<Object> {
    return this.httpClient.get(`${this.API_URL}/resources/${name}`);
  }
}