import { Component, EventEmitter, Input, Output } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-calendar",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="calendar-container">
      <div class="flex justify-between items-center mb-4">
        <button class="text-gray-500" (click)="prevMonth()">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        <h2 class="text-lg font-medium">{{ monthNames[currentMonth] }} {{ currentYear }}</h2>
        <button class="text-gray-500" (click)="nextMonth()">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div class="grid grid-cols-7 gap-1 text-center">
        <div *ngFor="let day of weekDays" class="text-sm font-medium text-gray-500">
          {{ day }}
        </div>
        
        <ng-container *ngFor="let day of calendarDays">
          <div 
            *ngIf="day.date"
            [class]="getDayClasses(day)"
            (click)="selectDate(day.date)">
            {{ day.date.getDate() }}
          </div>
          <div *ngIf="!day.date" class="p-2 text-gray-300">
            {{ day.label }}
          </div>
        </ng-container>
      </div>
    </div>
  `,
  styles: [
    `
    .calendar-day {
      @apply p-2 text-center cursor-pointer rounded-md hover:bg-gray-100;
    }
    .calendar-day.other-month {
      @apply text-gray-300;
    }
    .calendar-day.selected {
      @apply bg-purple-500 text-white hover:bg-purple-600;
    }
    .calendar-day.today {
      @apply font-bold;
    }
  `,
  ],
})
export class CalendarComponent {
  @Input() selectedDate: Date = new Date()
  @Output() dateSelected = new EventEmitter<Date>()

  currentMonth = 0
  currentYear = 0
  calendarDays: Array<{ date: Date | null; label: string }> = []

  weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
  monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  ngOnInit() {
    this.currentMonth = this.selectedDate.getMonth()
    this.currentYear = this.selectedDate.getFullYear()
    this.generateCalendarDays()
  }

  generateCalendarDays() {
    this.calendarDays = []

    // Get the first day of the month
    const firstDay = new Date(this.currentYear, this.currentMonth, 1)
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0)

    // Add previous month's days
    const daysFromPrevMonth = firstDay.getDay()
    const prevMonth = new Date(this.currentYear, this.currentMonth, 0)
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
      const date = new Date(prevMonth.getFullYear(), prevMonth.getMonth(), prevMonth.getDate() - i)
      this.calendarDays.push({
        date,
        label: date.getDate().toString(),
      })
    }

    // Add current month's days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      this.calendarDays.push({
        date: new Date(this.currentYear, this.currentMonth, i),
        label: i.toString(),
      })
    }

    // Add next month's days to fill out the calendar
    const daysToAdd = 42 - this.calendarDays.length // 6 rows of 7 days
    for (let i = 1; i <= daysToAdd; i++) {
      const date = new Date(this.currentYear, this.currentMonth + 1, i)
      this.calendarDays.push({
        date,
        label: date.getDate().toString(),
      })
    }
  }

  getDayClasses(day: { date: Date | null; label: string }) {
    if (!day.date) return "p-2 text-gray-300"

    let classes = "calendar-day"

    // Check if this day is from another month
    if (day.date.getMonth() !== this.currentMonth) {
      classes += " other-month"
    }

    // Check if this is the selected day
    if (this.isSameDay(day.date, this.selectedDate)) {
      classes += " selected"
    }

    // Check if this is today
    if (this.isSameDay(day.date, new Date())) {
      classes += " today"
    }

    return classes
  }

  isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    )
  }

  selectDate(date: Date) {
    this.selectedDate = date
    this.dateSelected.emit(date)
  }

  prevMonth() {
    this.currentMonth--
    if (this.currentMonth < 0) {
      this.currentMonth = 11
      this.currentYear--
    }
    this.generateCalendarDays()
  }

  nextMonth() {
    this.currentMonth++
    if (this.currentMonth > 11) {
      this.currentMonth = 0
      this.currentYear++
    }
    this.generateCalendarDays()
  }
}
