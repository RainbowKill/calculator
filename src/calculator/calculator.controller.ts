import { Controller, Post, Body, ValidationPipe } from "@nestjs/common";
import { CalculatorService } from './calculator.service';
import { CreateCalculatorDto } from './dto/create-calculator.dto';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post()
  create(@Body(new ValidationPipe()) createCalculatorDto: CreateCalculatorDto) {
    return this.calculatorService.calculate(createCalculatorDto);
  }
}
