import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngIndiaApp';

  Employes: any;

  constructor(public dataService: DataService) {
    this.getDetails();
  }

  getDetails() {
    this.dataService.getDetails().subscribe(res => {
      let result: any = res;
      this.Employes = result.data;
    });

  }
}
