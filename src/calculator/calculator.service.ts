import { Injectable } from '@nestjs/common';
import { CreateCalculatorDto } from './dto/create-calculator.dto';
import { DataCalculatorService } from "./data.calculator.service";

@Injectable()
export class CalculatorService {
  constructor(private readonly dataCalculatorService: DataCalculatorService) {}

  async calculate(calculatorDto: CreateCalculatorDto): Promise<CreateCalculatorDto>  {

    let data: any;
    data = await this.dataCalculatorService.getData(calculatorDto);

    if (data) return data;
    else {
      data = this.dataCalculatorService.calculateData(calculatorDto);
      await this.dataCalculatorService.createData(data);
      return data;
    }
  }
}
