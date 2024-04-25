import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNotIn,
  IsOptional,
  MaxLength,
  MinLength,
  validate
} from "class-validator";

export class CreateCalculatorDto {
  @IsInt()
  @IsNotEmpty()
  firstNum: number;
  @IsInt()
  @IsNotEmpty()
  @IsNotIn([0])
  secondNum: number;
  @IsIn(['+','-','*','/'])
  @MinLength(1)
  @MaxLength(1)
  @IsNotEmpty()
  action: string;
  @IsInt()
  @IsOptional()
  result: number;

  validateFields() {
    if (this.action === '/' && this.secondNum === 0) {
      throw new Error('You can not divide by zero');
    }
  }

  async validate() {
    await validate(this);
    this.validateFields();
  }
}
