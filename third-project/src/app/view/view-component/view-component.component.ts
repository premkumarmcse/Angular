import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  userName: String = ""; 
  response: any;
  constructor(private http: HttpClient) {
      
   }

  ngOnInit(): void {
  }

  search(){
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((response) => {
      this.response = response;
      console.log(response);
    })
  }
}
