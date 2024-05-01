// generic.service.ts
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Samurai } from '../models/Samurai';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> {
  urlNew: string = environment.apiURL;

  constructor(private http: HttpClient) {}

  getAll(endpoint: string): Observable<T[]> {
    const url = `${this.urlNew}${endpoint}`; // Ensure a slash between apiUrl and endpoint
    return this.http.get<T[]>(url);
  }

  delete(name: string, entityToDelete: number): Observable<any> {
    const url = `${this.urlNew}${name}/${entityToDelete}`;
    return this.http.delete(url);
  }
  create(s:T, endpoint:string): Observable<T>{
    return this.http.post<T>(`${this.urlNew}${endpoint}`,s,httpOptions);
  }
}
