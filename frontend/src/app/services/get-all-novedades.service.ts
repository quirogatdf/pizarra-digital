import { Injectable } from '@angular/core';
import { NovedadList } from '../data/mock-novedades';
import { Novedad } from '../model/novedad';

@Injectable({
  providedIn: 'root'
})
export class GetAllNovedadesService {

  novedadList: Novedad[] = NovedadList;

  constructor() { }

  getAllNovedad() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { res: this.novedadList };
        resolve(data);
      }, 2000);
    });
  }
}
