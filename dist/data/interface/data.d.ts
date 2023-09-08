import { Quote } from "../../quotes/models/quote";
export interface Data {
    companyName: string;
    hq: string;
    email: string;
    telephone: string;
    companyNumber: string;
    existingDataArray: ExistingData[];
}
export interface ExistingData {
    id: number;
    name: string;
    age: number;
    avatarUrl: string;
    interests: Interests[];
    location: DataLocation;
    favouriteAuthor?: string;
    favouriteQuotes?: Quote[];
}
interface Interests {
    type: string;
    areas: string[];
}
interface DataLocation {
    homeTown: string;
    isRemote: boolean;
}
export declare class DataMapper {
    static dataMap(data: any): Data;
    private static profileMap;
    private static dataArrayMap;
    private static interestMap;
    private static interestsArrayMap;
    private static locationMap;
    private static createName;
    private static createCompanyName;
    private static createCompanyNumber;
}
export {};
