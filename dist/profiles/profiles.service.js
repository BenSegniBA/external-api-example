"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const leighton_data_1 = require("./data/leighton-data");
const leighton_1 = require("./models/leighton");
const quotes_service_1 = require("../quotes/quotes.service");
let ProfilesService = exports.ProfilesService = class ProfilesService {
    constructor(_quotesService) {
        this._quotesService = _quotesService;
    }
    getAllCompanyData() {
        return (0, rxjs_1.of)(leighton_data_1.leightonData).pipe((0, rxjs_1.map)((data) => leighton_1.LeightonMapper.leightonMap(data.data)));
    }
    getStaffData() {
        return this.getAllCompanyData().pipe((0, rxjs_1.switchMap)((leighton) => this._quotesService.mergeFavouriteQuotesToStaffProfiles(leighton)));
    }
    getStaffProfileById(id) {
        return this.getStaffData().pipe((0, rxjs_1.map)((staffProfiles) => this.findStaffProfile(id, staffProfiles)));
    }
    findStaffProfile(id, staffProfiles) {
        return staffProfiles.find((profile) => profile.id == id);
    }
};
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [quotes_service_1.QuotesService])
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map