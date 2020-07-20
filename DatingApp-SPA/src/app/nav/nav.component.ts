import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    console.log('here');
    this.auth.login(this.model).subscribe(next => {
      console.log('logged in');
    }, error => {
      console.log(error);
    });
  }

}
