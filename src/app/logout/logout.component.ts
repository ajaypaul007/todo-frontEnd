import { AuthardcodedService } from './../service/authardcoded.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authhardcodedService: AuthardcodedService) { }

  ngOnInit() {

    this.authhardcodedService.logout();
  }



}