import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'third-project';

  // Dependency Injection and creating of instance of service
  constructor (private service: TestService) {
      this.service.printToConsole("Got the service");
  }
}
