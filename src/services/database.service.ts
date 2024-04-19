import { Injectable } from "@nestjs/common";
import { CalculatorEntity } from "../calculator/entities/calculator.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCalculatorDto } from "../calculator/dto/create-calculator.dto";

@Injectable()
export class MySQLService {
  constructor(
    @InjectRepository(CalculatorEntity) private calculatorRepository: Repository<CalculatorEntity>,
  ){}

  create(CalculatorDto: CreateCalculatorDto) {
    const newAction= this.calculatorRepository.create(CalculatorDto);
    return this.calculatorRepository.save(newAction);
  }

  findAll(): Promise<CalculatorEntity[]> {
    return this.calculatorRepository.find()
  }

  findOneResult(calculatorDto: CreateCalculatorDto) {
    return +this.calculatorRepository.findOne({
      select: {
        result: true
      },
      where: {
        firstNum : calculatorDto.firstNum,
        secondNum : calculatorDto.secondNum,
        action : calculatorDto.action
      }
    })
  }


}