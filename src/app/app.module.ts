import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    DragDropModule,
    RouterModule,
    HeaderComponent
  ],
  providers: []
})
export class AppModule { } 