import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalculatorModule } from './calculator/calculator.module';
import { ConfigModule } from  '@nestjs/config';
import { config } from "../config/configuration";
import { dataSourceOptions } from "../db/data-source";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    CalculatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
