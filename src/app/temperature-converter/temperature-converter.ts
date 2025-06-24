import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature-converter',
  imports: [CommonModule,FormsModule],
  templateUrl: './temperature-converter.html',
  styleUrl: './temperature-converter.css'
})
export class TemperatureConverter {
celsius: number | null = null;
  fahrenheit: number | null = null;

  convertToFahrenheit(): void {
    if (this.celsius !== null) {
      this.fahrenheit = (this.celsius * 9 / 5) + 32;
    }
  }

  convertToCelsius(): void {
    if (this.fahrenheit !== null) {
      this.celsius = (this.fahrenheit - 32) * 5 / 9;
    }
  }
}
