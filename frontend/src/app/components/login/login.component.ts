import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  /* Mostrar spinner */
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({

      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar() {
    console.log(this.form)
    const usuario = (this.form.value.user).toLowerCase();
    const password = this.form.value.password;
    if (usuario == 'nati' && password === '123') {
      this.fakeLoading();

    } else {
      this.error();
    }
  }

  /* Metodo error */
  error() {
    this.snackBar.open('El nombre de usuario o contraseña son incorrectos', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading() {
    this.loading = true
    setTimeout(() => {
      this.router.navigate(['dashboard'])
    }, 1500)

  }

}
