import { Injectable } from "@nestjs/common";
import Redis from "ioredis";
import { ConfigService } from "@nestjs/config";
import { CreateCalculatorDto } from "../calculator/dto/create-calculator.dto";
import { LogService } from "./log.service";




@Injectable()
export class RedisService {
  private readonly redis : Redis
  constructor(configService: ConfigService, private readonly logger: LogService) {
    this.redis = new Redis( configService.get('redis'));
    console.log('Новое подключение к редису')
  }

  async setToCache(key: string, calculatorDto: CreateCalculatorDto){
    let data = JSON.stringify(calculatorDto);
    this.logger.log(`${this.constructor.name}/${this.setToCache.name} - Set data to cache ${data}`)
    await this.redis.set(key, data);
  }

  async getFromCache(key: string) {
    let data = await this.redis.get(key)
    if (!data)
    {
      this.logger.log(`${this.constructor.name}/${this.getFromCache.name} - Get data from cache ${data}`)
      return data;
    }
    this.logger.log(`${this.constructor.name}/${this.getFromCache.name} - Get data from cache ${data}`)
    return await JSON.parse(data);
  }

}