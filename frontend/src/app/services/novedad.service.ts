import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Novedad } from '../interface/novedad';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NovedadService {
  baseURL = `http://localhost:3000/api/novedad`


  constructor(
    private http: HttpClient
  ) { }
  add(novedad: Novedad): Observable<void> {
    return this.http.post<void>(`${this.baseURL}/add`, novedad)
  }

  getAllData(): Observable<Novedad[]> {
    return this.http.get<Novedad[]>(`${this.baseURL}`)
  }

  getById(id: number): Observable<Novedad> {
    return this.http.get<Novedad>(`${this.baseURL}/${id}}`)
  }
  delete(id: number): Observable<Novedad> {
    return this.http.delete<Novedad>(`${this.baseURL}/delete/${id}`)
  }

  update(id: number, novedad: Novedad): Observable<void> {
    return this.http.put<void>(`${this.baseURL}/update/${id}`, novedad)
  }
}
