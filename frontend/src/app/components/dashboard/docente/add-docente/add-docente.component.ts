import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  @ViewChild(MatSort) matSort!: MatSort;
  docenteForm: FormGroup;
  dataSource!: MatTableDataSource<Docente>;
  docentes: Docente[] = [];
  loading: boolean = false;
  operation: string = 'Agregar ';
  id: number | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dateAdapter: DateAdapter<Date>,
    private _formBuilder: FormBuilder,
    private _docenteService: DocenteService,
    public dialogref: MatDialogRef<AddDocenteComponent>,
  ) {
    /*Format Date */
    this._dateAdapter.setLocale('es-AR')

    this.docenteForm = this._formBuilder.group({
      dni: ['', [
        Validators.required,
        Validators.pattern('^\\d+$'),
        Validators.maxLength(8),
      ]
      ],
      apellido: ['', Validators.required],
      nombre: ['', Validators.required],
      fechaNacimiento: [null],
      telefono: ['', Validators.pattern('^\\d+$')],
      email: '',
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
        fechaNacimiento: data.fecha_nacimiento,
        telefono: data.telefono,
        email: data.email
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
      fecha_nacimiento: new Date(this.docenteForm.value.fechaNacimiento),
      telefono: this.docenteForm.value.telefono,
      email: this.docenteForm.value.email
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

