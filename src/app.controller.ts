import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('categories')
  getCategories(@Query('limit') limit: number=100, @Query('offset') offset = 25, @Query('brand') brand: string) {
    return `limit: ${limit} ----- Offset: ${offset} brand: ${brand}`
  }

  @Get('categories/:id/products/:Productid')
  getCategoriesd(@Param('id') id: string, @Param('Productid') Productid: string): string {
    return `mediaplayer The route request is: /categories/${id}/products/${Productid}`
  }



}
