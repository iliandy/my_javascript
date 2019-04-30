import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"

import { AppComponent } from "./app.component"
import { EventsComponent } from "./components/events/events.component"
import { EventThumbnailComponent } from "./components/event-thumbnail/event-thumbnail.component"
import { NavbarComponent } from "./components/navbar/navbar.component"

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventThumbnailComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
