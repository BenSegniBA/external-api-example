import { Controller, Get } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { Quotes } from './models/quote';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly _quotesService: QuotesService) {}
  @Get()
  public getQuotes(): Promise<Quotes> {
    return this._quotesService.getQuotes();
  }
}
