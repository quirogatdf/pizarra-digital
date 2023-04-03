import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { User } from 'src/app/interface/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  /* Mostrar spinner */
  loading: boolean = false;
  usuario: User | undefined;
  password: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private auth: LoginService,

  ) {
    this.form = this.formBuilder.group({

      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  ingresar() {
    
    this.usuario={
      username : this.form.value.user,
      password : this.form.value.password
    }
    this.auth.login(this.usuario).subscribe(data => {
      if(data.dataUser.username ==='preceptor') {

        localStorage.setItem('username',data.dataUser.username )
        localStorage.setItem('isAdmin','false')
      }
      // this.auth.setToken(data.dataUser.accessToken);
      this.router.navigate(['dashboard/']);
    })

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
