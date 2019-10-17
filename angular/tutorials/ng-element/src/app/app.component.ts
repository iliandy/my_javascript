import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() inputData: any = { text: 'App world' };
  @Output() outputData: any = new EventEmitter();

  handleHelloOutputData(response) {
    console.log(`App Component response from Hello Component output emitted event:\n${JSON.stringify(response)}`);
    this.outputData.emit(response);
  }
}
