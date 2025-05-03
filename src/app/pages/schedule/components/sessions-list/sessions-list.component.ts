import { Component, EventEmitter, Input, Output } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Clock, LucideAngularModule } from "lucide-angular"

@Component({
  selector: "app-sessions-list",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  styles: [
    `
.learning {
  @apply bg-green-500/10 text-green-500 border-green-500
}

.teaching {
  @apply bg-blue-500/10 text-blue-500 border-blue-500
}
`
  ],
  template: `
    <div class="mt-6">
      <h3 class="text-lg font-medium mb-4">
        Sessions on {{ selectedDate | date:'MMM d' }}
      </h3>

      <div *ngIf="sessions.length === 0" class="text-gray-500 text-center py-4">
        No sessions scheduled for this day
      </div>

      <div *ngFor="let session of sessions" class="mb-2 p-3 border rounded-xl flex flex-col gap-2">

        <div class="flex justify-between">

        <div class="font-medium">{{ session.skill }}</div>
        <div
            class="border rounded-full p-1 px-2 text-xs font-medium"
            [class.learning]="session.type === 'Learning'"
            [class.teaching]="session.type === 'Teaching'"
          >{{ session.type }}</div>

        </div>

        <div class="flex text-[--muted-foreground] items-center gap-2">
          <i-lucide [img]="Clock" class="size-4"></i-lucide>
          <div class="text-sm">{{ session.time }} • {{session.duration}}</div>
        </div>
      </div>

      <div class="mt-4 flex justify-center">
        <button
          (click)="addSession.emit()"
          class="flex items-center text-gray-500 hover:text-gray-700 px-4 py-2 rounded-md border border-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Add Session
        </button>
      </div>
    </div>
  `,
})
export class SessionsListComponent {
  readonly Clock = Clock;

  @Input() selectedDate: Date = new Date()
  @Input() sessions: any[] = []
  @Output() addSession = new EventEmitter<void>()
}
