import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors: string[] = ["DodgerBlue", "Gold", "LightGray", "LimeGreen", "Magenta", "OrangeRed", "RoyalBlue", "Orange"];

  shuffle(array: string[]): Array<string>{
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
  }

  ngOnInit() {
    this.shuffle(this.colors);
  }
}
