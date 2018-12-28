import { BasicAuthenticationService } from './../service/basic-authentication.service';
import { AuthardcodedService } from './../service/authardcoded.service';
import { WelcomeComponent } from './../welcome/welcome.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'user';
  password = '';
  errormessage = 'An Error has occured, Plesae contact support at 1-800-xxx-xxxx';
  loginflag=false;
  invalidLogin: boolean;

  constructor(private route: Router, private hardCodedAuthService: AuthardcodedService,
               private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  // onhandleLogin() {

  //   if(this.hardCodedAuthService.authentication(this.username, this.password)) {
  //   //if(this.username==='username' && this.password==='password'){
  //     this.route.navigate(['welcome', this.username]);
  //     this.invalidLogin = false;
  //   } else
  //    { this.invalidLogin = true; }

  //   console.log(this.username);
  //   console.log(this.password);
  // }

  handleBasicAuthLogin() {

    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
    .subscribe(
      data => {
        console.log(data)
        this.route.navigate(['welcome', this.username]);
        this.invalidLogin = false;

      },
      error => {
        console.log(error)
        this.invalidLogin = true;
      }); 
  }

  handleJWTAuthLogin() {

    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
    .subscribe(
      data => {
        console.log(data)
        this.route.navigate(['welcome', this.username]);
        this.invalidLogin = false;

      },
      error => {
        console.log(error)
        this.invalidLogin = true;
      }); 
  }
}
  

  
  