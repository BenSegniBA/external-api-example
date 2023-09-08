import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { Quote, Quotes } from './models/quote';
import { Data, ExistingData } from 'src/data/interface/data';
export declare class QuotesService {
    private _httpService;
    quotes$: Observable<Quote[]>;
    constructor(_httpService: HttpService);
    getQuotes(): Promise<Quotes>;
    mergeNewDataIntoExistingData(data: Data): Observable<ExistingData[]>;
}
