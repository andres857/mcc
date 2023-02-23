import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaplayersController } from './mediaplayers/mediaplayers.controller';
import { MediaplayersService } from './mediaplayers/mediaplayers.service';
import { MediaplayersModule } from './mediaplayers/mediaplayers.module';

@Module({
  imports: [MediaplayersModule],
  controllers: [AppController, MediaplayersController],
  providers: [AppService, MediaplayersService],
})
export class AppModule {}
