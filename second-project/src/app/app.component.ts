import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  inputText: String = "Enter your name";
  constructor() {
      this.user = new User();
      this.user.name = "Prem";
      this.user.designation = "Software Developer";
      this.user.address = "SALEM, TAMIL NADU, IN";
      this.user.phone = [
        '90429-85429',
        '88830-54587'
      ];
  }
}
