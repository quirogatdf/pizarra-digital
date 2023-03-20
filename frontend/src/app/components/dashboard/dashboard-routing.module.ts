import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DocenteComponent } from './docente/docente.component';
import { HomeComponent } from './home/home.component';
import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, children: [
      { path: '', component: HomeComponent},
      { path: 'docente', component: DocenteComponent},
      { path: 'reporte', component: ReporteComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
