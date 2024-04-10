import { Module } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorController } from './calculator.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CalculatorEntity } from "./entities/calculator.entity";
import { RedisService } from '../services/redis.service'
import { MySQLService } from "../services/MySQL.service";

@Module({
  imports: [TypeOrmModule.forFeature([CalculatorEntity])],
  controllers: [CalculatorController],
  providers: [CalculatorService, RedisService, MySQLService],
})
export class CalculatorModule {}
