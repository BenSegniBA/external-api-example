"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeightonMapper = void 0;
const weight_enum_1 = require("./weight.enum");
class LeightonMapper {
    static leightonMap(data) {
        return {
            companyName: LeightonMapper.createCompanyName(data),
            hq: data.HeadQuarters,
            email: data.Email,
            telephone: data.Telephone_Number,
            companyNumber: LeightonMapper.createCompanyNumber(data),
            staffProfiles: LeightonMapper.profileArrayMap(data.Staff_Profiles),
        };
    }
    static profileMap(data) {
        return {
            id: data.id,
            name: LeightonMapper.createName(data),
            age: data.Age,
            avatarUrl: data.Image,
            personalInterests: LeightonMapper.interestsArrayMap(data.Personal_Interests),
            location: LeightonMapper.locationMap(data),
            developerWeight: LeightonMapper.assessDeveloperWeight(data.Age),
            favouriteAuthor: data.Favourite_Author,
        };
    }
    static profileArrayMap(data) {
        if (!Array.isArray(data))
            return [];
        return data.map(LeightonMapper.profileMap);
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
        return data.map(LeightonMapper.interestMap);
    }
    static locationMap(data) {
        return {
            homeTown: data.location.city,
            isRemote: data.location.remote,
        };
    }
    static assessDeveloperWeight(age) {
        if (age < 25) {
            return weight_enum_1.DeveloperWeight.junior;
        }
        else if (age > 25 && age < 35) {
            return weight_enum_1.DeveloperWeight.midweight;
        }
        else {
            return weight_enum_1.DeveloperWeight.senior;
        }
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
exports.LeightonMapper = LeightonMapper;
//# sourceMappingURL=leighton.js.map