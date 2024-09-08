import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ItemComponent, RouterOutlet] 
})
export class AppComponent {
  title = 'crud-items-frondend';
}
