import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthardcodedService {

  

  constructor(http: HttpClient) { }

  authentication (username, password) {

    console.log('before ' + this.isUserLoggedIn());

    if(username ==='username' && password ==='password')
    {
      sessionStorage.setItem('authenticatedUser', username);

      console.log('after ' + this.isUserLoggedIn());
      return true;
      
    }
    else 
    return false;
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout() {

    sessionStorage.removeItem('authenticatedUser');
  }
}
