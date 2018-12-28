import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/welcome-data.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  msg: string;
 // message: string;
  name='';

  constructor(private activatedRoute: ActivatedRoute, private restService: WelcomeDataService) { }

  ngOnInit() {

    console.log(this.activatedRoute.snapshot.params['name']);
    this.name = this.activatedRoute.snapshot.params['name'];
  }

  onCustomClick() {

    console.log(this.restService.executeHelloWorldBean());

    this.restService.executeHelloWorldBean().subscribe(
      response => this.handleWelcomeMessage(response),
      error => this.handlerrorMessage(error)
     //console.log(response)
    );

    console.log('last line of custom click method');
  }

  onCustomClickWithPathVariable() {

    this.restService.executeHelloWorldBeanWithPathVariables(this.name).subscribe(

      response => this.handleWelcomeMessage(response),
      error => this.handlerrorMessage(error)
    );
  }

  //onCustomClickPathVariablebean () {}

  handleWelcomeMessage(response) {

    this.msg = response.message;
    console.log(this.msg);
  }

  handlerrorMessage(error) {

    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.msg = error.error.message;
  }

}


// Access to XMLHttpRequest at 'http://localhost:8080/hello-world-bean' from origin 
// 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' 
// header is present on the requested resource.

// Access to XMLHttpRequest at 'http://localhost:8080/hello-world-name/undefined' from origin 
// 'http://localhost:4200' has been blocked by CORS policy:
//  Response to preflight request doesn't pass access control check: It does not have HTTP ok status.