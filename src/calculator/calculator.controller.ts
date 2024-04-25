import { Controller, Post, Body, ValidationPipe } from "@nestjs/common";
import { CalculatorService } from './calculator.service';
import { CreateCalculatorDto } from './dto/create-calculator.dto';
import { MetricsService } from "../services/metrics.service";

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService, private readonly metric : MetricsService) {}

  @Post()
  create(@Body(new ValidationPipe()) createCalculatorDto: CreateCalculatorDto) {
    this.metric.incrementCalculatorOperation();
    return this.calculatorService.calculate(createCalculatorDto);
  }
}
