import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaServiceService {

  constructor() { }
    private darkMode = false;

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }
}
