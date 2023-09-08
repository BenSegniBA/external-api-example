import { Injectable } from '@nestjs/common';
import { Observable, map, of, switchMap } from 'rxjs';
import { ExistingData, Data, DataMapper } from './interface/data';
import { data } from './data.mock.api/data.mock.api';
import { QuotesService } from '../quotes/quotes.service';

@Injectable()
export class DataService {
    constructor(private _quotesService: QuotesService) { }

    public getAll(): Observable<Data> {
        return of(data).pipe(map((data) => DataMapper.dataMap(data.data)));
    }

    public getNewDataWithExternalData(): Observable<ExistingData[]> {
        return this.getAll().pipe(
            switchMap((data: Data) =>
                this._quotesService.mergeNewDataIntoExistingData(data),
            ),
        );
    }
}
