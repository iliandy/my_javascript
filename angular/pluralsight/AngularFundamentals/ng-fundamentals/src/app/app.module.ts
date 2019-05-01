import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"

import { AppComponent } from "./app.component"
import { EventDetailsComponent } from "./components/event-details/event-details.component"
import { EventsComponent } from "./components/events/events.component"
import { EventThumbnailComponent } from "./components/event-thumbnail/event-thumbnail.component"
import { NavbarComponent } from "./components/navbar/navbar.component"
import { RouterModule } from "@angular/router"
import { routes } from "./routes"
@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
