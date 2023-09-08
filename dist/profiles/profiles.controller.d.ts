import { Observable } from 'rxjs';
import { ProfilesService } from './profiles.service';
import { Leighton, LeightonProfile } from './models/leighton';
export declare class ProfilesController {
    private readonly _profilesService;
    constructor(_profilesService: ProfilesService);
    getLeightonData(): Observable<Leighton>;
    getLeightonStaffProfiles(): Observable<LeightonProfile[]>;
    getLeightonStaffMemberById(id: number): Observable<LeightonProfile>;
}
