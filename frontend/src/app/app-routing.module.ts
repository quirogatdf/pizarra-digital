import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserAccessGuard } from './user-access.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule),

    
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
