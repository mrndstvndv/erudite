import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Home, MessageSquare, LucideAngularModule, User, Calendar } from 'lucide-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, LucideAngularModule],
})
export class AppComponent {
  readonly Home = Home
  readonly Chat = MessageSquare
  readonly Profile = User
  readonly Schedule = Calendar

  constructor() { }
}
