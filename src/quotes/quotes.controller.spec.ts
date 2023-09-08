import { Test, TestingModule } from '@nestjs/testing';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';
import { HttpModule } from '@nestjs/axios';

describe('QuotesController', () => {
  let controller: QuotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [QuotesController],
      providers: [QuotesService],
    }).compile();

    controller = module.get<QuotesController>(QuotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
