import { Component } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TopBarComponent, RouterModule], 
})
export class AppComponent {}
