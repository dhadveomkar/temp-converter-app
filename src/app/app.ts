import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TemperatureConverter } from './temperature-converter/temperature-converter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule, TemperatureConverter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'temp-converter-app';
}
