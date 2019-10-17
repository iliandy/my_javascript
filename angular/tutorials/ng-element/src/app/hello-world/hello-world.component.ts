import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent implements OnInit {
  @Input() helloInputData: any = { text: 'Hello world' };
  @Output() helloOutputData: any = new EventEmitter();

  constructor() {}

  handleClick() {
    const submitResponse: any = { data: 'Submit response...' };
    console.log(`Hello Component submit response:\n${JSON.stringify(submitResponse)}`);
    this.helloOutputData.emit(submitResponse);
  }

  ngOnInit() {}
}
