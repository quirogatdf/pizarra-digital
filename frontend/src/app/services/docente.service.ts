import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Docente } from '../interface/docente';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  baseURL: string = '';

  constructor(
    private http: HttpClient
  ) {
    this.baseURL = `${environment.baseURL}/docente`
  }

  add(docente: Docente): Observable<void> {
    return this.http.post<void>(`${this.baseURL}/add`, docente)
  }

  getAllData(): Observable<Docente[]> {
    return this.http.get<Docente[]>(`${this.baseURL}`)
  }

  delete(id: number): Observable<Docente[]> {
    return this.http.delete<Docente[]>(`${this.baseURL}/delete/${id}`)
  }

  getById(id: number): Observable<Docente> {
    return this.http.get<Docente>(`${this.baseURL}/${id}}`)
  }

  update(id: number, docente: Docente): Observable<void> {
    return this.http.put<void>(`${this.baseURL}/update/${id}`, docente)
  }

}
