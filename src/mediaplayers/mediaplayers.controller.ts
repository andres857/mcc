import { Controller, Get, Post, Param, Body, ParseIntPipe,HttpCode } from '@nestjs/common';

@Controller('mediaplayers')
export class MediaplayersController {

    @Get()
    mediaplayers(): string {
      return 'route mediaPlayers'
    }
    
    @Get(':mediaplayerid')
    getMediaplayerbyId(@Param('mediaplayerid', ParseIntPipe) mediaplayerid: number) {
      return `mediaplayer ${mediaplayerid}`
    }

    @Get('clients/:id')
    getMediaPlayersbyClient(@Param('id') id:any){
        return `mediaplayerby client, the code client is ${id}`
    }
    @Post()
    @HttpCode(201)
    createNewMediaPlayer(@Body() payload:any){
        return {
          message:"",
          data: payload
        }
    }
}
