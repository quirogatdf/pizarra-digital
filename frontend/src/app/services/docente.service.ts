import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Docente } from '../interface/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  baseURL =`https://pizarra-backend.onrender.com/api/docente`
  //baseURL = `http://localhost:3000/api/docente`

  constructor(
    private http: HttpClient
  ) { }

  add(docente: Docente): Observable<void> {
    return this.http.post<void>(`${this.baseURL}/add`, docente)
  }

  getAllData(): Observable<Docente[]> {
    return this.http.get<Docente[]>(`${this.baseURL}`)
  }

  delete(id: number): Observable<Docente[]> {
    return this.http.delete<Docente[]>(`${this.baseURL}/delete/${id}`)
  }

  getById(id:number): Observable<Docente>{
    return this.http.get<Docente>(`${this.baseURL}/${id}}`)
  }

  update(id: number, docente: Docente): Observable<void> {
    return this.http.put<void>(`${this.baseURL}/update/${id}`, docente)
  }

}
