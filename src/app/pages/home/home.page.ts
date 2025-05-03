import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ThemeService } from 'src/app/services/theme.service';
import { LucideAngularModule, Flame, TrendingUp, Calendar } from 'lucide-angular';
import { EasyAccessTabsComponent } from '../components/easy-access-tabs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, EasyAccessTabsComponent],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class HomePage {
  theme = inject(ThemeService)

  readonly FlameIcon = Flame
  readonly Trending = TrendingUp
  readonly Calendar = Calendar

  // Mock data for daily challenges
  dailyChallenges = [
    {
      id: 'challenge1',
      title: 'Connect with 3 new people',
      description: 'Expand your network by connecting with people who share your interests',
      points: 50,
      progress: 1,
      maxProgress: 3,
      icon: '👥',
    },
    {
      id: 'challenge2',
      title: 'Complete a learning session',
      description: 'Schedule and complete a learning session with one of your connections',
      points: 100,
      progress: 0,
      maxProgress: 1,
      icon: '📚',
    },
    {
      id: 'challenge3',
      title: 'Share a learning tip',
      description: 'Share a helpful tip in one of your communities',
      points: 30,
      progress: 0,
      maxProgress: 1,
      icon: '💡',
    },
  ];

  upcomingEvents = [
    {
      id: 1,
      title: "Web Development Workshop",
      location: "Online",
      startTime: "2:00 PM",
      endTime: "4:00 PM",
      month: "AUG", // August 28
      day: "25",
      attendees: 120,
    },
    {
      id: 2,
      title: "Language Exchange Meetup",
      location: "Central Park",
      startTime: "5:30 PM",
      endTime: "7:30 PM",
      month: "AUG", // August 28
      day: "28",
      attendees: 85,
    },
  ]

  getProgressWidth(progress: number, maxProgress: number): string {
    return `${(progress / maxProgress) * 100}%`
  }
}
