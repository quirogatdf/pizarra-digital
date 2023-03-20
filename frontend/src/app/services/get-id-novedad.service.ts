import { Injectable } from '@angular/core';
import { Novedad } from '../model/novedad';
import { NovedadList } from '../data/mock-novedades'

@Injectable({
  providedIn: 'root'
})
export class GetIdNovedadService {
  novedad?: Novedad;
  novedadList: Novedad[] = NovedadList;

  constructor() { }

  getByIdNovedad(id: number) {
    this.novedad = this.novedadList.find( n => n.id === id);
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve(this.novedad);
      },2000);
    })
  }
}
