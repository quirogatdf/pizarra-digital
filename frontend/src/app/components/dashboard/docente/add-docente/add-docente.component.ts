import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Docente } from 'src/app/interface/docente';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-add-docente',
  templateUrl: './add-docente.component.html',
  styleUrls: ['./add-docente.component.css']
})
export class AddDocenteComponent implements OnInit {
  docenteForm: FormGroup;
  dataSource!: MatTableDataSource<Docente>;
  docentes: Docente[] = [];
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private _formBuilder: FormBuilder,
    private _docenteService: DocenteService,
    public dialogref: MatDialogRef<AddDocenteComponent>,

  ) {
    this.docenteForm = this._formBuilder.group({
      dni: '',
      apellido: '',
      nombre: ''
    })
  }

  ngOnInit(): void {
  }
  save(): void {
    if (this.docenteForm.valid) {
      this._docenteService.add(this.docenteForm.value).subscribe(res => {
        console.log('success')
      })
      
      this.dialogref.close();
      window.location.reload();
    } else {

      alert("Please Enter valid data");
    }
  }
}

