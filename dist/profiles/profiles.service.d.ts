import { Observable } from 'rxjs';
import { Leighton, LeightonProfile } from './models/leighton';
import { QuotesService } from '../quotes/quotes.service';
export declare class ProfilesService {
    private readonly _quotesService;
    constructor(_quotesService: QuotesService);
    getAllCompanyData(): Observable<Leighton>;
    getStaffData(): Observable<LeightonProfile[]>;
    getStaffProfileById(id: number): Observable<LeightonProfile>;
    private findStaffProfile;
}
