import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { ExistingData } from './interface/data';
export declare class DataController {
    private _dataService;
    constructor(_dataService: DataService);
    getNewDataAfterMerge(): Observable<ExistingData[]>;
}
