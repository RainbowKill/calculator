import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CalculatorEntity {
  @PrimaryGeneratedColumn()
  id: number;
  // @Column({unique:true})
  // key: string;
  @Column()
  firstNum: number;
  @Column()
  secondNum: number;
  @Column()
  action: string;
  @Column()
  result: number;

}
