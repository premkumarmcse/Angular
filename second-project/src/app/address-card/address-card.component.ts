import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
  @Input('name') userName: String;
  constructor() { 
  }

  ngOnInit(): void {
    this.user = {
      name: this.userName,
      title: 'Software Developer',
      address: 'Salem, Tamil Nadu, India',
      phone: [
        '90429-85429',
        '88830-54587'
      ]
    };
  }

}
