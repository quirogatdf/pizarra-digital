import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { NovedadService } from 'src/app/services/novedad.service';
import { Novedad } from '../../../../interface/novedad'

@Component({
  selector: 'app-add-edit-novedad',
  templateUrl: './add-edit-novedad.component.html',
  styleUrls: ['./add-edit-novedad.component.css']
})
export class AddEditNovedadComponent implements OnInit {
  @ViewChild(MatSort) matSort!: MatSort;
  novedadForm: FormGroup;
  loading: boolean = false;
  operation: string = 'Agregar ';
  id: number | undefined;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private _novedadService: NovedadService,
    public dialogref: MatDialogRef<AddEditNovedadComponent>,
    private _dateAdapter: DateAdapter<Date>,
  ) {
    this._dateAdapter.setLocale('es-AR')

    this.novedadForm = this._formBuilder.group({
      docenteId: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      observaciones: ['']
    })
    this.id = data.id;
  }


  ngOnInit(): void {
    this.isEdit(this.id);
  }

  isEdit(id: number | undefined) {
    if (id !== undefined) {
      this.operation = 'Editar ';
      this.getNovedad(id);
    }

  }

  getNovedad(id: number) {
    this._novedadService.getById(id).subscribe(data => {
      this.novedadForm.patchValue({
        docenteId: data.docenteId,
        fechaInicio: data.fecha_inicio,
        fechaFin: data.fecha_fin,
        observaciones: data.observaciones
      })
    })
  }

  /* Cerrar Modal */
  cancel() {
    this.dialogref.close(false);
  }


  addEditNovedad() {
    if (this.novedadForm.invalid) {
      return;
    };

    const novedad: Novedad = {
      docenteId: this.novedadForm.value.docenteId,
      fecha_inicio: this.novedadForm.value.fechaInicio,
      fecha_fin: this.novedadForm.value.fechaFin,
      observaciones: this.novedadForm.value.observaciones,
      docente: {
        apellido: '',
        nombre: ''
      }
    }
    /* Mostrar spinner mientras se guarda en la BD */
    this.loading = true;

    if (this.id === undefined) {
      this._novedadService.add(novedad).subscribe(() => { })
    } else {
      this._novedadService.update(this.id, novedad).subscribe(data => { console.log(data)})
    }
    this.loading = false
    this.dialogref.close(true);

  }
}
