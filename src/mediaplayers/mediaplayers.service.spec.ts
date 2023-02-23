import { Test, TestingModule } from '@nestjs/testing';
import { MediaplayersService } from './mediaplayers.service';

describe('MediaplayersService', () => {
  let service: MediaplayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaplayersService],
    }).compile();

    service = module.get<MediaplayersService>(MediaplayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
