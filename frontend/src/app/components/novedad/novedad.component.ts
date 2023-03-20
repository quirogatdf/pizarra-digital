import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from '../../services/shared.service';
export interface PeriodicElement {
  id: number;
  name: string;
  fechaInicio: String;
  fechaFin: string;
  observaciones: string;
}


const fechaFin: Date = new Date('22-02-2022')
// const '06/12/22'
const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Mora, Claudia Noemi', fechaInicio: '06/12/22', fechaFin: '20/12/22', observaciones: '' },
  //{ id: 2, name: 'Lopez, Laura', fechaFin: '07/12/22', fechaInicio: '06/12/22', observaciones: '' },
  { id: 3, name: 'Encina, Marina', fechaInicio: '05/12/22', fechaFin: '19/12/22', observaciones: '' },
  { id: 4, name: 'Montenegro, Valeria', fechaInicio: '12/12/22', fechaFin: '09/07/23', observaciones: '' },
  { id: 5, name: 'Lopez, Laura', fechaInicio: '12/12/22', fechaFin: '16/12/22', observaciones: '' },
  { id: 6, name: 'Gramajo, Luis', fechaInicio: '14/12/22', fechaFin: '20/12/22', observaciones: '' },
  { id: 7, name: 'Fuentes, Lorena', fechaInicio: '12/12/22', fechaFin: '10/01/22', observaciones: '' },
];

@Component({
  selector: 'app-novedad',
  templateUrl: './novedad.component.html',
  styleUrls: ['./novedad.component.css']
})

export class NovedadComponent {
  isCreated: Boolean = false;
  isLogged: Boolean = false;
  displayedColumns: string[] = ['id', 'name', 'fechaInicio', 'fechaFin', 'observaciones'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  SendDataonChange(event: any) {
    console.log(event.target.value);
  }

  showCreateForm(): void {
    if (this.isCreated) {
      this.isCreated = false;
    } else {
      this.isCreated = true;
    }
  }

  createNovedad () {
    
  }


}

