import { Injectable } from '@angular/core';

export interface Session {
  id: number;
  date: Date;
  skill: string;
  time: string;
  duration: string;
  description?: string;
  type: string
}

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  private sessions: Session[] = [];

  constructor() {
    // Initialize with some mock data
    this.sessions = [
      {
        id: 1,
        date: new Date(2025, 4, 10),
        skill: 'Morning Standup',
        time: '09:00',
        duration: '30 min',
        description: 'Daily team sync meeting',
        type: "Learning"
      }
    ];
  }

  getSessionsByDate(date: Date): Session[] {
    return this.sessions.filter(session =>
      session.date.getFullYear() === date.getFullYear() &&
      session.date.getMonth() === date.getMonth() &&
      session.date.getDate() === date.getDate()
    );
  }

  addSession(session: Omit<Session, 'id'>): Session {
    const newSession = {
      ...session,
      id: this.generateId()
    };
    this.sessions.push(newSession);
    return newSession;
  }

  private generateId(): number {
    return Math.max(0, ...this.sessions.map(s => s.id)) + 1;
  }
}
