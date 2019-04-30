import { Component, OnInit } from "@angular/core"
import { EventService } from "./event.service"
import { ToastrService } from "../common/toastr.service"

@Component({
  selector: "events",
  templateUrl: "./events.component.html",
  // styleUrls: ["./events.component.css"],
})
export class EventsComponent implements OnInit {
  events: any[]

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents()
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName)
  }
}
