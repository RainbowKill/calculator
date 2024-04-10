import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNotIn,
  IsOptional,
  MaxLength,
  MinLength,
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
}
