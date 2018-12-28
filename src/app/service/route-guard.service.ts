import { AuthardcodedService } from './authardcoded.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router, private hardcodedAuthService: AuthardcodedService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(this.hardcodedAuthService.isUserLoggedIn()) {
      return true;
      
      
    }
    
    this.router.navigate(['login']);
    
    return false;
  }
}
