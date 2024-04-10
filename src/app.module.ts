import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from "../db/data-source";
import { CalculatorModule } from './calculator/calculator.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), CalculatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
