import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(false);
  currentTheme = this.isDarkTheme.asObservable();

  constructor() { }

  toggleTheme() {
    this.isDarkTheme.next(!this.isDarkTheme.value);
  }
} 