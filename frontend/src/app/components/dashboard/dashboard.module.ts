import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialExampleModule } from 'src/app/material.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { DocenteComponent } from './docente/docente.component';
import { ReporteComponent } from './reporte/reporte.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AddDocenteComponent } from './docente/add-docente/add-docente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovedadComponent } from './novedad/novedad.component';
import { AddEditNovedadComponent } from './novedad/add-edit-novedad/add-edit-novedad.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    DocenteComponent,
    ReporteComponent,
    NavbarComponent,
    HeaderComponent,
    AddDocenteComponent,
    NovedadComponent,
    AddEditNovedadComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DashboardRoutingModule,
    MaterialExampleModule
  ]
})
export class DashboardModule { }
