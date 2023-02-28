import { Component } from '@angular/core';
import { JenniferDataServiceService } from './jennifer-data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jennifer-webpage';

  constructor(public data: JenniferDataServiceService) {
    this.data.loadDb();
  }
}
