import { Module } from '@nestjs/common';
import { MySQLService } from "./MySQL.service";

@Module({
  providers: [ MySQLService ]
})
export class MySQLModule {}