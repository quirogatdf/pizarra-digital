import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  viewNovedadId?: number;

  constructor() { }

  setViewNovedadId(id: number){
    this.viewNovedadId = id;
  }

  getViewNovedadId(){
    return this.viewNovedadId;
  }
}
