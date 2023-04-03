import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserAccessGuard implements CanActivate {
  constructor(
  private authService: LoginService,
  private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let token = localStorage.getItem('token');
      console.log(token);
      if ( token != null ){
        this.router.navigate(['dashboard'])
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
  }
  
}
