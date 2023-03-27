import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Docente } from 'src/app/interface/docente';
import { DocenteService } from 'src/app/services/docente.service';
import { Location } from '@angular/common';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-add-docente',
  templateUrl: './add-docente.component.html',
  styleUrls: ['./add-docente.component.css']
})
export class AddDocenteComponent implements OnInit {
  @Output() onAddDocente: EventEmitter<Docente> = new EventEmitter();
  docenteForm: FormGroup;
  dataSource!: MatTableDataSource<Docente>;
  docentes: Docente[] = [];
  @ViewChild(MatSort) matSort!: MatSort;
  loading: boolean = false;
  operation: string = 'Agregar ';
  id: number | undefined;

  constructor(
    private _dateAdapter: DateAdapter<Date>,
    private _formBuilder: FormBuilder,
    private _docenteService: DocenteService,
    private location: Location,
    public dialogref: MatDialogRef<AddDocenteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    /*Format Date */
    this._dateAdapter.setLocale('es-AR')

    this.docenteForm = this._formBuilder.group({
      dni: ['', Validators.required],
      apellido: ['', Validators.required],
      nombre: ['', Validators.required],
      fechaNacimiento: [null]
    })
    this.id = data.id;
  }

  ngOnInit(): void {
    this.isEdit(this.id)
  }
  isEdit(id: number | undefined) {
    if (id !== undefined) {
      this.operation = 'Editar ';
      this.getDocente(id);
    }
  }

  getDocente(id: number) {
    this._docenteService.getById(id).subscribe(data => {
      this.docenteForm.patchValue({
        dni: data.dni,
        nombre: data.nombre,
        apellido: data.apellido,
        fechaNacimiento: data.fecha_nacimiento
      })
    })

  }

  /* Cerrar Modal */
  cancel() {
    this.dialogref.close(false);
  }

  /* Capturar datos del formulario */
  addEditDocente() {
    if (this.docenteForm.invalid) {
      return;
    };

    const docente: Docente = {
      dni: this.docenteForm.value.dni,
      apellido: this.docenteForm.value.apellido,
      nombre: this.docenteForm.value.nombre,
      fecha_nacimiento: this.docenteForm.value.fechaNacimiento.toISOString().slice(0, 10)
    }
    /* Mostrar spinner mientras se guarda en la BD */
    this.loading = true;

    if (this.id === undefined) {
      this._docenteService.add(docente).subscribe(() => {
      })
    } else {
      this._docenteService.update(this.id, docente).subscribe(data => {
      })
    }
    this.loading = false
    this.dialogref.close(true);

  }

}

