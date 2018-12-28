import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// export class Message {
  
//   constructor(public msg: string) {}
// }

export class WelcomeDataService {

  constructor(private http: HttpClient) { }

//http://localhost:8080/hello-world-bean
  executeHelloWorldBean() {
   // console.log("custom message printed");
    return this.http.get('http://localhost:8080/hello-world-bean', );
  }
  
  //http://localhost:8080/hello-world-name/Ajay
  executeHelloWorldBeanWithPathVariables(message) {

    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
     
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    return this.http.get(`http://localhost:8080/hello-world-name/${message}`);
    // return this.http.get(`http://localhost:8080/hello-world-name/${message}`,
    // {headers});
  }
   
  // createBasicAuthenticationHttpHeader() {

  //   let username= 'user'
  //   let password = 'pass'
  //   let basicAuthHeaderString = 'Basic' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

  
}
