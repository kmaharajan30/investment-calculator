import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentResultService } from './investment-results.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentResultService) {}

  get results() {
    return this.investmentService.resultsData;
  }
}
