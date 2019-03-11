import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myBool: boolean = true;
  myArr: number[] = [3, 2, 5, 6];
}
