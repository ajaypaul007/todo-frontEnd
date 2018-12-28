import { Component, OnInit } from '@angular/core';
import { AuthardcodedService } from '../service/authardcoded.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn = false;

  constructor(private authHardCoded: AuthardcodedService) { }

  ngOnInit() {

    this.isUserLoggedIn = this.authHardCoded.isUserLoggedIn();
  }

}
