import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GenericService<Entity> {
urlNew: string = environment.apiUrl;


constructor (private http: HttpClient){}

getAll(endpoint: string): Observable<Entity[]> {
  const url = `${this.urlNew}${endpoint}`;
  return this.http.get<Entity[]>(url);
}

create (s:Entity, endpoint:string):Observable<Entity>{
  return this.http.post<Entity>(`${this.urlNew}${endpoint}`,s);
}
Update(s: Entity, id: string, endpoint: string): Observable<Entity> {
  const url = `${this.urlNew}${endpoint}/${id}`;
  return this.http.put<Entity>(url, s);
}

Delete(id: string, endpoint: string): Observable<any> {
  const url = `${this.urlNew}${endpoint}/${id}`;
  return this.http.delete(url);
}

}
