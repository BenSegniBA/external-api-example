import { Quote } from '../../quotes/models/quote';
export interface Leighton {
    companyName: string;
    hq: string;
    email: string;
    telephone: string;
    companyNumber: string;
    staffProfiles: LeightonProfile[];
}
export interface LeightonProfile {
    id: number;
    name: string;
    age: number;
    avatarUrl: string;
    personalInterests: PersonalInterest[];
    location: ProfileLocation;
    developerWeight: string;
    favouriteAuthor?: string;
    favouriteQuotes?: Quote[];
}
interface PersonalInterest {
    type: string;
    areas: string[];
}
interface ProfileLocation {
    homeTown: string;
    isRemote: boolean;
}
export declare class LeightonMapper {
    static leightonMap(data: any): Leighton;
    private static profileMap;
    private static profileArrayMap;
    private static interestMap;
    private static interestsArrayMap;
    private static locationMap;
    private static assessDeveloperWeight;
    private static createName;
    private static createCompanyName;
    private static createCompanyNumber;
}
export {};
