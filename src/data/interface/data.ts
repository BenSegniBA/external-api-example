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

export class DataMapper {
    public static dataMap(data: any): Data {
        return {
            companyName: DataMapper.createCompanyName(data),
            hq: data.HeadQuarters,
            email: data.Email,
            telephone: data.Telephone_Number,
            companyNumber: DataMapper.createCompanyNumber(data),
            existingDataArray: DataMapper.dataArrayMap(data.Staff_Profiles),
        };
    }

    private static profileMap(data: any): ExistingData {
        return {
            id: data.id,
            name: DataMapper.createName(data),
            age: data.Age,
            avatarUrl: data.Image,
            interests: DataMapper.interestsArrayMap(
                data.Personal_Interests,
            ),
            location: DataMapper.locationMap(data),
            favouriteAuthor: data.Favourite_Author,
        };
    }

    private static dataArrayMap(data: any): ExistingData[] {
        if (!Array.isArray(data)) return [];
        return data.map(DataMapper.profileMap);
    }

    private static interestMap(data: any): Interests {
        return {
            type: data.TYPE,
            areas: data.AREAS,
        };
    }

    private static interestsArrayMap(data: any): Interests[] {
        if (!Array.isArray(data)) return [];
        return data.map(DataMapper.interestMap);
    }

    private static locationMap(data: any): DataLocation {
        return {
            homeTown: data.location.city,
            isRemote: data.location.remote,
        };
    }

    private static createName(data: any): string {
        return `${data.First_Name} ${data.Last_Name}`;
    }

    private static createCompanyName(data: any): string {
        return `${data.Company} Group Ltd`;
    }

    private static createCompanyNumber(data: any): string {
        return `No.${data.Company_Number}`;
    }
}