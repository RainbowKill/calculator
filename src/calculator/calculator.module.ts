import { Module } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorController } from './calculator.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CalculatorEntity } from "./entities/calculator.entity";
import { RedisService } from '../services/redis.service'
import { DatabaseService } from "../services/database.service";
import { DataCalculatorService } from "./data.calculator.service";
import { LogService } from "../services/log.service";
import { MetricsService } from "../services/metrics.service";

@Module({
  imports: [TypeOrmModule.forFeature([CalculatorEntity])],
  controllers: [CalculatorController],
  providers: [CalculatorService, RedisService, DatabaseService, DataCalculatorService, LogService, MetricsService],
})
export class CalculatorModule {}
