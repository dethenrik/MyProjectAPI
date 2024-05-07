import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Samurai } from '../models/Samurai';

@Injectable({
  providedIn: 'root'
})
export class SamuraiService {
  private apiUrl = '...'; // Your API URL for samurai data

  constructor(private http: HttpClient) { }

  getAllSamurais(): Observable<Samurai[]> {
    return this.http.get<Samurai[]>(`${this.apiUrl}/samurai`);
  }

  createSamurai(samurai: Samurai): Observable<Samurai> {
    return this.http.post<Samurai>(`${this.apiUrl}/samurai`, samurai);
  }

  deleteSamurai(samuraiId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/samurai/${samuraiId}`);
  }
}