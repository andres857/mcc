import { Test, TestingModule } from '@nestjs/testing';
import { MediaplayersController } from './mediaplayers.controller';

describe('MediaplayersController', () => {
  let controller: MediaplayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediaplayersController],
    }).compile();

    controller = module.get<MediaplayersController>(MediaplayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
