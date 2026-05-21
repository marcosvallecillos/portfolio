import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, DragDropModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class CardContactComponent implements OnInit {
  isMobile: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;
  }
}
