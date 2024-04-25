import { Injectable } from "@nestjs/common";
import { CalculatorEntity } from "../calculator/entities/calculator.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCalculatorDto } from "../calculator/dto/create-calculator.dto";
import { plainToClass } from "class-transformer";
import { LogService } from "./log.service";

@Injectable()
export class DatabaseService {
  constructor(@InjectRepository(CalculatorEntity) private calculatorRepository: Repository<CalculatorEntity>,
              private readonly logger : LogService){}

  async setToDatabase(CalculatorDto: CreateCalculatorDto) {
    const data= this.calculatorRepository.create(CalculatorDto);
    this.logger.log(`${DatabaseService.name}/${this.setToDatabase.name} - Set data to database ${JSON.stringify(data)}`)
    await this.calculatorRepository.save(data);
  }

  async getFromDatabase(calculatorDto: CreateCalculatorDto) {
    let data = await this.calculatorRepository.findOne({
      where: {
        firstNum : calculatorDto.firstNum,
        secondNum : calculatorDto.secondNum,
        action : calculatorDto.action
      }
    })
    let newData = plainToClass(CreateCalculatorDto, data);
    this.logger.log(`${DatabaseService.name}/${this.setToDatabase.name} - Get data from database ${JSON.stringify(newData)}`)
    return newData;
  }
}