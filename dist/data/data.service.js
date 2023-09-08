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
exports.DataService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const data_1 = require("./interface/data");
const data_mock_api_1 = require("./data.mock.api/data.mock.api");
const quotes_service_1 = require("../quotes/quotes.service");
let DataService = exports.DataService = class DataService {
    constructor(_quotesService) {
        this._quotesService = _quotesService;
    }
    getAll() {
        return (0, rxjs_1.of)(data_mock_api_1.data).pipe((0, rxjs_1.map)((data) => data_1.DataMapper.dataMap(data.data)));
    }
    getNewDataWithExternalData() {
        return this.getAll().pipe((0, rxjs_1.switchMap)((data) => this._quotesService.mergeNewDataIntoExistingData(data)));
    }
};
exports.DataService = DataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [quotes_service_1.QuotesService])
], DataService);
//# sourceMappingURL=data.service.js.map