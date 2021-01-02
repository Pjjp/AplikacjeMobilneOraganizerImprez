import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service'
import { SnackService } from '../snack.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authSer: AuthService, private snack: SnackService) { }
  
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    const authenticated = await this.authSer.isAuthenticated();
    const isLoggedIn = !!authenticated;
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      this.snack.authError();
      console.log(isLoggedIn);
    }
    
  return isLoggedIn;

  }
  
}
