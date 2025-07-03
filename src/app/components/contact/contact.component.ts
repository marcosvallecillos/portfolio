import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, DragDropModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class CardContactComponent {

}
