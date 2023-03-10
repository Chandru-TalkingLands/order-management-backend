import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; 
import { PlotModule } from './manageplots/manageplots.module';

@Module({
  imports: [PlotModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/ordermanagement')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
