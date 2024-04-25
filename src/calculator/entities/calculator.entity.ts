import { Entity, Column, Index, PrimaryColumn } from "typeorm";

@Entity('calculator')
@Index(['firstNum','secondNum','action'], {unique:true})
export class CalculatorEntity {
  @PrimaryColumn({
    type: 'int',
  })
  firstNum: number;
  @Column({
    type: 'int',
  })
  secondNum: number;
  @Column({
    type: 'varchar',
    length: 1,
  })
  action: string;
  @Column({
    type: 'int',
  })
  result: number;
}
