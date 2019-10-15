import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent],
  entryComponents: [AppComponent, HelloWorldComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });

    customElements.define('my-ng-element', el);
  }

  ngDoBootstrap() {}
}
