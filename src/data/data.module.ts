import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { QuotesModule } from 'src/quotes/quotes.module';

@Module({
    imports: [QuotesModule],
    providers: [DataService],
    controllers: [DataController]
})
export class DataModule { }
