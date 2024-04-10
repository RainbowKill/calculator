import { Injectable } from '@nestjs/common';
import { CreateCalculatorDto } from './dto/create-calculator.dto';
import { RedisService } from "../services/redis.service";
import { MySQLService } from "../services/MySQL.service";

@Injectable()
export class CalculatorService {
  constructor(private readonly redis: RedisService, private readonly data: MySQLService) {}

  async calculate(calculator: CreateCalculatorDto): Promise<CreateCalculatorDto>  {

    const key = `calculator_${calculator.firstNum}${calculator.action}${calculator.secondNum}`;
    let successOperation = false;

    if (await this.redis.keyExists(key)) {
      calculator.result = + await this.redis.getValue(key);
      console.log('stage of redis');
      return calculator;
    }

    else if (this.data.findOneResult(calculator)) {
      calculator.result = this.data.findOneResult(calculator)
      await this.redis.setValue(key, calculator.result);
      console.log('stage of mysql');
      return calculator;
    }

    else {
      const firstNum = calculator.firstNum;
      const secondNum = calculator.secondNum;
      switch (calculator.action) {
        case '+':
          calculator.result = firstNum + secondNum;
          successOperation = true;
          break;
        case '-':
          calculator.result = firstNum - secondNum;
          successOperation = true;
          break;
        case '*':
          calculator.result = firstNum * secondNum;
          successOperation = true;
          break;
        case '/':
          if (secondNum == 0) {
            calculator.result = 0;
            successOperation = false;
          } else {
            calculator.result = firstNum / secondNum;
            successOperation = true;
          }
          break;
      }
      if (successOperation) {
        await this.data.create(calculator);
        await this.redis.setValue(key, calculator.result);
      }
      console.log(`stage of calculating ${successOperation} ${calculator.action}`);
      return calculator;
    }
  }
}
