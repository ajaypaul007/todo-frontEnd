import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1> Welcome to {{msg}}! </h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  msg = 'Full-Stack Application using Angular and Spring Stack';
}
