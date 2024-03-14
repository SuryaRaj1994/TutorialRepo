import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainGcComponent } from './main-gc/main-gc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainGcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
