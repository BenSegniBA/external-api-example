"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataMapper = void 0;
class DataMapper {
    static dataMap(data) {
        return {
            companyName: DataMapper.createCompanyName(data),
            hq: data.HeadQuarters,
            email: data.Email,
            telephone: data.Telephone_Number,
            companyNumber: DataMapper.createCompanyNumber(data),
            existingDataArray: DataMapper.dataArrayMap(data.Staff_Profiles),
        };
    }
    static profileMap(data) {
        return {
            id: data.id,
            name: DataMapper.createName(data),
            age: data.Age,
            avatarUrl: data.Image,
            interests: DataMapper.interestsArrayMap(data.Personal_Interests),
            location: DataMapper.locationMap(data),
            favouriteAuthor: data.Favourite_Author,
        };
    }
    static dataArrayMap(data) {
        if (!Array.isArray(data))
            return [];
        return data.map(DataMapper.profileMap);
    }
    static interestMap(data) {
        return {
            type: data.TYPE,
            areas: data.AREAS,
        };
    }
    static interestsArrayMap(data) {
        if (!Array.isArray(data))
            return [];
        return data.map(DataMapper.interestMap);
    }
    static locationMap(data) {
        return {
            homeTown: data.location.city,
            isRemote: data.location.remote,
        };
    }
    static createName(data) {
        return `${data.First_Name} ${data.Last_Name}`;
    }
    static createCompanyName(data) {
        return `${data.Company} Group Ltd`;
    }
    static createCompanyNumber(data) {
        return `No.${data.Company_Number}`;
    }
}
exports.DataMapper = DataMapper;
//# sourceMappingURL=data.js.map