export interface Quote {
  quotation: string;
  source: string;
}

export interface Quotes {
  quotes: Quote[];
}

export class QuoteMapper {
  public static quoteMap(data: any): Quote {
    return {
      quotation: data.quote,
      source: data.author,
    };
  }

  public static quoteArrayMap(data: any[]): Quote[] {
    if (!Array.isArray(data)) return [];
    return data.map((quote) => QuoteMapper.quoteMap(quote));
  }
}
