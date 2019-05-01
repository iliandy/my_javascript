import { Routes } from "@angular/router"
import { EventsComponent } from "./components/events/events.component"
import { EventDetailsComponent } from "./components/event-details/event-details.component"

export const routes: Routes = [
  { path: "events", component: EventsComponent },
  { path: "events/:id", component: EventDetailsComponent },
  { path: "", redirectTo: "/events", pathMatch: "full" },
]
