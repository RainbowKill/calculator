import { Injectable } from "@nestjs/common";
import { RedisService } from "../services/redis.service";
import { DatabaseService } from "../services/database.service";
import { CreateCalculatorDto } from "./dto/create-calculator.dto";
import { LogService } from "../services/log.service";

@Injectable()
export class DataCalculatorService {
  constructor(private readonly redis : RedisService,
              private readonly database: DatabaseService,
              private readonly logger: LogService) {}

  async getData( calculatorDto : CreateCalculatorDto, forcedRefresh = false): Promise<CreateCalculatorDto> {

    let data : any;
    const key = `calculator_${calculatorDto.firstNum}${calculatorDto.action}${calculatorDto.secondNum}`;

    if(!forcedRefresh){
      data = await this.redis.getFromCache(key)
      if (data) {
        // console.log(`Data from cache ${JSON.stringify(data)}\n=================================`)
        this.logger.log(`Data from cache ${JSON.stringify(data)}`)
         return data;
      }
    }
    data = await this.database.getFromDatabase(calculatorDto);
    if (data){
      await this.redis.setToCache(key, data)
      // console.log(`Data from database ${JSON.stringify(data)}\n=================================`)
      this.logger.log(`Data from database ${JSON.stringify(data)}`)
    }
    return data;
  }

  async createData(calculatorDto: CreateCalculatorDto) {
    const key = `calculator_${calculatorDto.firstNum}${calculatorDto.action}${calculatorDto.secondNum}`;
    try {
      throw Error('cannot create data');
    } catch (error) {
      this.logger.error(error.message, error);
    }
    await this.redis.setToCache(key, calculatorDto)
    await this.database.setToDatabase(calculatorDto);
    console.log('=================================')
  }

  calculateData( calculatorDto: CreateCalculatorDto) : CreateCalculatorDto {
    const firstNum = calculatorDto.firstNum;
    const secondNum = calculatorDto.secondNum;
    switch (calculatorDto.action) {
      case '+':
        calculatorDto.result = firstNum + secondNum;
        break;
      case '-':
        calculatorDto.result = firstNum - secondNum;
        break;
      case '*':
        calculatorDto.result = firstNum * secondNum;
        break;
      case '/':
        calculatorDto.result = firstNum / secondNum;
        break;
    }
    return calculatorDto;
  }
}