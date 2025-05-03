import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'chat',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/chat/chat.page').then((m) => m.ChatPage),
      },
      {
        path: 'message/:id',
        loadComponent: () => import('./pages/chat/message/message.page').then((m) => m.MessagePage),
      }
    ]
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then((m) => m.ProfilePage),
  },
  {
    path: 'schedule',
    loadComponent: () => import('./pages/schedule/schedule.page').then((m) => m.SchedulePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
