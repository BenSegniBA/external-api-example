import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { ExistingData } from './interface/data';

@Controller('data')
export class DataController {
    constructor(private _dataService: DataService) { }

    @Get()
    public getNewDataAfterMerge(): Observable<ExistingData[]> {
        return this._dataService.getNewDataWithExternalData();
    }
}
