import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { SessionsListComponent } from "./components/sessions-list/sessions-list.component";
import { AddSessionDialogComponent } from "./components/add-session-dialog/add-session-dialog.component";
import { SessionsService, Session } from "../../services/sessions.service";

@Component({
  selector: 'app-schedule',
  templateUrl: 'schedule.page.html',
  standalone: true,
  imports: [CommonModule, CalendarComponent, SessionsListComponent, AddSessionDialogComponent]
})
export class SchedulePage {
  selectedDate = new Date(2025, 4, 10) // May 10, 2025
  sessionsForSelectedDate: Session[] = []
  isAddSessionDialogVisible = false

  constructor(private sessionsService: SessionsService) {
    this.loadSessionsForDate(this.selectedDate);
  }

  onDateSelected(date: Date) {
    this.selectedDate = date
    this.loadSessionsForDate(date);
  }

  private loadSessionsForDate(date: Date) {
    this.sessionsForSelectedDate = this.sessionsService.getSessionsByDate(date);
  }

  showAddSessionDialog() {
    this.isAddSessionDialogVisible = true
  }

  hideAddSessionDialog() {
    this.isAddSessionDialogVisible = false
  }

  saveSession(sessionData: Omit<Session, 'id'>) {
    this.sessionsService.addSession(sessionData);
    console.log(sessionData)
    this.loadSessionsForDate(this.selectedDate);
    this.hideAddSessionDialog();
  }
}
