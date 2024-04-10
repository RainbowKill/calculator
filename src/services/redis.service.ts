import { Injectable } from '@nestjs/common';
import Redis from "ioredis";

const redis = new Redis({
  port: 6379,
  host: '127.0.0.1'
})

@Injectable()
export class RedisService {
  async setValue(key: string, value:any): Promise<void> {
    redis.set(key, value);
  }
  async getValue(key: string): Promise<any> {

    return redis.get(key);
  }
  async keyExists(key: string): Promise<boolean> {
    return await redis.exists(key) === 1;
  }
}