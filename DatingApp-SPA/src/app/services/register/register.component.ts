import { AuthService } from './../auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  @Input() message: string;
  @Output() cancelRegistration = new EventEmitter();
  constructor(private auth: AuthService) { }
  
  ngOnInit(): void {
    console.log(this.message);
  }

  register() {
    this.auth.register(this.model).subscribe(next => {
      console.log('registered');
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.cancelRegistration.emit(false);
  }

}
