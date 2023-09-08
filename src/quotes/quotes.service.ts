import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, defer, firstValueFrom, from, map } from 'rxjs';
import { Quote, QuoteMapper, Quotes } from './models/quote';
import { dummyQuotesAPI } from '../global/global.constants';
import { Data, ExistingData } from 'src/data/interface/data';

@Injectable()
export class QuotesService {
  public quotes$: Observable<Quote[]> = defer(() =>
    from(this.getQuotes()).pipe(
      map((quotationsObject) =>
        QuoteMapper.quoteArrayMap(quotationsObject.quotes),
      ),
    ),
  );
  public constructor(private _httpService: HttpService) {}

  public async getQuotes(): Promise<Quotes> {
    const { data } = await firstValueFrom<AxiosResponse<Quotes>>(
      this._httpService.get(dummyQuotesAPI),
    );
    return data;
  }

  public mergeNewDataIntoExistingData(
    data: Data,
  ): Observable<ExistingData[]> {
    return this.quotes$.pipe(
      map((quotes: Quote[]) =>
        data.existingDataArray.map((existingData: ExistingData) =>
        existingData.favouriteAuthor
            ? {
                ...existingData,
                favouriteQuotes: quotes.filter(
                  (quote) => quote.source === existingData.favouriteAuthor,
                ),
              }
            : existingData,
        ),
      ),
    );
  }
}
