import { Component, EventEmitter, Input, Output } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

@Component({
  selector: "app-add-session-dialog",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative">
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold">Schedule New Session</h2>
            <button (click)="close.emit()" class="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="space-y-6">
            <!-- Session Type -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Session Type</label>
              <div class="flex space-x-2">
                <button
                  [class]="sessionType === 'Learning' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border-gray-300 border'"
                  class="flex-1 py-2 px-4 rounded-md flex items-center justify-center"
                  (click)="sessionType = 'Learning'">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  Learning
                </button>
                <button
                  [class]="sessionType === 'Teaching' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border-gray-300 border'"
                  class="flex-1 py-2 px-4 rounded-md flex items-center justify-center"
                  (click)="sessionType = 'Teaching'">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                  Teaching
                </button>
              </div>
            </div>

            <!-- Skill -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Skill</label>
              <div class="relative">
                <input
                  [(ngModel)]="skill"
                  class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"/>
              </div>
            </div>

            <!-- Connection -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Connection</label>
              <div class="relative">
                <select
                  [(ngModel)]="connection"
                  class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                  <option value="Alice Smith">Alice Smith</option>
                  <option value="Bob Johnson">Bob Johnson</option>
                  <option value="Carol Williams">Carol Williams</option>
                </select>
              </div>
            </div>

            <!-- Time and Duration -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <div class="relative">
                  <select
                    [(ngModel)]="time"
                    class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <div class="relative">
                  <select
                    [(ngModel)]="duration"
                    class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                    <option value="15 minutes">15 minutes</option>
                    <option value="30 minutes">30 minutes</option>
                    <option value="45 minutes">45 minutes</option>
                    <option value="60 minutes">60 minutes</option>
                    <option value="90 minutes">90 minutes</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Location -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <div class="relative">
                <select
                  [(ngModel)]="location"
                  class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                  <option value="Online">Online</option>
                  <option value="Coffee Shop">Coffee Shop</option>
                  <option value="Library">Library</option>
                  <option value="Park">Park</option>
                  <option value="Office">Office</option>
                  <option value="School">School</option>
                </select>
              </div>
            </div>

            <!-- Buttons -->
            <div class="flex justify-end space-x-3 mt-8">
              <button
                (click)="close.emit()"
                class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Cancel
              </button>
              <button
                (click)="onSave()"
                class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Create Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AddSessionDialogComponent {
  @Input() selectedDate: Date = new Date()
  @Output() close = new EventEmitter<void>()
  @Output() save = new EventEmitter<any>()

  sessionType = "Learning"
  skill = "JavaScript"
  connection = "Alice Smith"
  time = "2:00 PM"
  duration = "45 minutes"
  location = "Online"

  onSave() {
    this.save.emit({
      date: this.selectedDate,
      type: this.sessionType,
      skill: this.skill,
      connection: this.connection,
      time: this.time,
      duration: this.duration,
      location: this.location,
    })
  }
}
