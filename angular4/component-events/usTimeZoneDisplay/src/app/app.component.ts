import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateTime = new Date();
  selectedTZ = null;

  changeTZ(timezone) {
    this.dateTime = new Date();

    switch(timezone) {
      case "PST":
        this.dateTime.setHours(this.dateTime.getHours() + 2);
        break;
      case "MST":
        this.dateTime.setHours(this.dateTime.getHours() + 1);
        break;
      case "EST":
        this.dateTime.setHours(this.dateTime.getHours() - 1);
        break;
      default:
        this.dateTime.setHours(this.dateTime.getHours() + 0);
    }

  this.selectedTZ = timezone;
  }

  clear() {
    this.selectedTZ = null;
    this.dateTime = null;
  }
}
