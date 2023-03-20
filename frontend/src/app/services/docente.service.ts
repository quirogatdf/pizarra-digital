import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Docente } from '../interface/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  baseURL = `http://localhost:3000/api/docente`

  constructor(
    private http: HttpClient
  ) { }

  add(docente: Docente[]): Observable<Docente[]> {
    return this.http.post<Docente[]>(`${this.baseURL}/add`, docente)
  }

  getAllData(): Observable<Docente[]> {
    return this.http.get<Docente[]>(`${this.baseURL}`)
  }

  delete(id: number): Observable<Docente[]> {
    return this.http.delete<Docente[]>(`${this.baseURL}/delete/${id}`)
  }


}
