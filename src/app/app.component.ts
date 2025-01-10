import { Component, Input } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import {
  ResultData,
  UserInput,
} from './components/user-input/user-input.model';
import { InvestmentResultsComponent } from './components/investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  resultData?: ResultData[];
}
