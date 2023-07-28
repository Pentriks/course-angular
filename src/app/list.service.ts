import { Weapons } from './Weapons.ts/Weapons.ts/Weapons.ts.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/weapons'

  constructor(private http: HttpClient) { }

  remove(id: number) {
    return this.http.delete<Weapons>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Weapons[]> {
    return this.http.get<Weapons[]>(this.apiUrl)
  }

  getItem(id: number): Observable<Weapons> {
    return this.http.get<Weapons>(`${this.apiUrl}/${id}`);
  }
}
