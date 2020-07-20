import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  showRegister = false;
  messageFromHome = "Get ready for love.";

  constructor() { }

  ngOnInit(): void {
  }

  showRegisterClicked() {
    this.showRegister = true;
  }

  onCancelRegistration(value: boolean) {
    this.showRegister = value;
  }

}
