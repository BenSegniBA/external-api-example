import { QuotesService } from './quotes.service';
import { Quotes } from './models/quote';
export declare class QuotesController {
    private readonly _quotesService;
    constructor(_quotesService: QuotesService);
    getQuotes(): Promise<Quotes>;
}
