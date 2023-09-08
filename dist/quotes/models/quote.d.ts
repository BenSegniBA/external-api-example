export interface Quote {
    quotation: string;
    source: string;
}
export interface Quotes {
    quotes: Quote[];
}
export declare class QuoteMapper {
    static quoteMap(data: any): Quote;
    static quoteArrayMap(data: any[]): Quote[];
}
