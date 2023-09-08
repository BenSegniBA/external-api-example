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
exports.QuotesService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const quote_1 = require("./models/quote");
const global_constants_1 = require("../global/global.constants");
let QuotesService = exports.QuotesService = class QuotesService {
    constructor(_httpService) {
        this._httpService = _httpService;
        this.quotes$ = (0, rxjs_1.defer)(() => (0, rxjs_1.from)(this.getQuotes()).pipe((0, rxjs_1.map)((quotationsObject) => quote_1.QuoteMapper.quoteArrayMap(quotationsObject.quotes))));
    }
    async getQuotes() {
        const { data } = await (0, rxjs_1.firstValueFrom)(this._httpService.get(global_constants_1.dummyQuotesAPI));
        return data;
    }
    mergeNewDataIntoExistingData(data) {
        return this.quotes$.pipe((0, rxjs_1.map)((quotes) => data.existingDataArray.map((existingData) => existingData.favouriteAuthor
            ? {
                ...existingData,
                favouriteQuotes: quotes.filter((quote) => quote.source === existingData.favouriteAuthor),
            }
            : existingData)));
    }
};
exports.QuotesService = QuotesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], QuotesService);
//# sourceMappingURL=quotes.service.js.map