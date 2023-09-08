import { Module } from '@nestjs/common';
import { QuotesModule } from './quotes/quotes.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [QuotesModule, DataModule],
})
export class AppModule {}
