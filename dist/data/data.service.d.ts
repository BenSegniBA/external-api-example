import { Observable } from 'rxjs';
import { ExistingData, Data } from './interface/data';
import { QuotesService } from '../quotes/quotes.service';
export declare class DataService {
    private _quotesService;
    constructor(_quotesService: QuotesService);
    getAll(): Observable<Data>;
    getNewDataWithExternalData(): Observable<ExistingData[]>;
}
