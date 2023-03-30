import { Component, OnInit, ViewChild } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private _dateAdapter: DateAdapter<Date>,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {
    this._dateAdapter.setLocale('es-AR')
  }

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
      return data.docente.apellido.toLocaleLowerCase().includes(filter) || data.docente.nombre.toLocaleLowerCase().includes(filter);
    }
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*Borrar la novedad */
  delete(id: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this._novedadService.delete(id).subscribe(res => {
        this.snackBar.open('El usuario se elimino correctamente', '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        })
        this.getAllNovedades();
      })
    }
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
