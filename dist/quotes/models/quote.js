"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteMapper = void 0;
class QuoteMapper {
    static quoteMap(data) {
        return {
            quotation: data.quote,
            source: data.author,
        };
    }
    static quoteArrayMap(data) {
        if (!Array.isArray(data))
            return [];
        return data.map((quote) => QuoteMapper.quoteMap(quote));
    }
}
exports.QuoteMapper = QuoteMapper;
//# sourceMappingURL=quote.js.map