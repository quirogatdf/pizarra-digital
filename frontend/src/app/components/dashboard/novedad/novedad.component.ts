import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Novedad } from 'src/app/interface/novedad';
import { NovedadService } from 'src/app/services/novedad.service';
import { AddEditNovedadComponent } from './add-edit-novedad/add-edit-novedad.component';

@Component({
  selector: 'app-novedad',
  templateUrl: './novedad.component.html',
  styleUrls: ['./novedad.component.css']
})
export class NovedadComponent implements OnInit {
  displayedColumns: string[] = ['id', 'docenteId', 'fechaInicio', 'fechaFin', 'observaciones', 'operaciones'];
  novedades: Novedad[] = [];
  dataSource!: MatTableDataSource<Novedad>;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private _novedadService: NovedadService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllNovedades();
  }
  
  /* Abrir modal para editar o agregar */
  addEditNovedad(id?: number) {
    const dialogref = this.dialog.open(AddEditNovedadComponent, {
      width: '50%',
      disableClose: true,
      data: { id: id }
    });
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.getAllNovedades();
      }
    })
  }

  applyFilter(event: Event) {
    this.dataSource.filterPredicate = (data: Novedad, filter: string) => {
      return data.docente.apellido.toLocaleLowerCase().includes(filter)
    }
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*Borrar la novedad */
  delete(id: number) {
    alert(id);
  }
  /* Mostrar todas las novedades */
  getAllNovedades() {
    this._novedadService.getAllData().subscribe(x => {
      this.novedades = x;
      this.dataSource = new MatTableDataSource<Novedad>(this.novedades);
      this.dataSource.sort = this.matSort;
    })
  }


}
