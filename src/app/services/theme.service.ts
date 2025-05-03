import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  darkMode = signal(false);
  accentColor = signal<'purple' | 'blue' | 'green' | 'orange' | 'pink'>('purple');

  constructor() {
    this.loadTheme();
  }

  toggleDarkMode() {
    this.darkMode.update(v => !v);
    this.applyTheme();
  }

  cycleAccent() {
    const colors = ['purple', 'blue', 'green', 'orange', 'pink'] as const;
    const currentIdx = colors.indexOf(this.accentColor());
    this.accentColor.set(colors[(currentIdx + 1) % colors.length]);
    this.applyTheme();
  }

  private applyTheme() {
    const root = document.documentElement;
    root.classList.toggle('dark-theme', this.darkMode());

    for (const c of ['purple', 'blue', 'green', 'orange', 'pink']) {
      root.classList.remove(`accent-${c}`);
    }
    root.classList.add(`accent-${this.accentColor()}`);
  }

  private loadTheme() {
    // Optional: load from localStorage or default
    this.applyTheme();
  }
}
