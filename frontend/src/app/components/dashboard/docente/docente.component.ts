import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Docente } from 'src/app/interface/docente';
import { DocenteService } from 'src/app/services/docente.service';
import { AddDocenteComponent } from './add-docente/add-docente.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {
  displayedColumns: string[] = ['id', 'dni', 'apellido', 'fechaNacimiento', 'operaciones'];
  docentes: Docente[] = [];
  dataSource!: MatTableDataSource<Docente>;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private _docenteService: DocenteService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.cargarDocente();
  }

  addData(enteranimation: any, exitanimation: any, code: any) {
    this.dialog.open(AddDocenteComponent,)
  };

  addEditDocente(id?: number) {
    const dialogref = this.dialog.open(AddDocenteComponent, {
      width: '50%',
      disableClose: true,
      data: {id: id}
    });
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.cargarDocente();
      }
    })
  }

  /*Aplicar filtro */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  /* Borrar un docente */
  delete(id: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this._docenteService.delete(id).subscribe(res => {
        this.snackBar.open('El usuario se elimino correctamente', '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        })

        this.cargarDocente();
      })
    }

  }


  cargarDocente() {
    this._docenteService.getAllData().subscribe(data => {
      this.docentes = data;
      this.dataSource = new MatTableDataSource<Docente>(this.docentes);
      this.dataSource.sort = this.matSort;
      // this.dataSource = data;

    })
  }

}
