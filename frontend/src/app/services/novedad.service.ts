import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Novedad } from '../interface/novedad';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})

export class NovedadService {
  baseURL: string = '';

  constructor(
    private http: HttpClient,
    ) { 
      this.baseURL = `${environment.baseURL}/novedad`
    }
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
