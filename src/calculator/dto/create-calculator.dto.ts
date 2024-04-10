import { IsBoolean, IsIn, IsInt, IsNotEmpty, IsNotIn, IsOptional } from "class-validator";

export class CreateCalculatorDto {
  @IsInt()
  @IsNotEmpty()
  firstNum: number;
  @IsInt()
  @IsNotEmpty()
  @IsNotIn([8])
  secondNum: number;
  @IsIn(['+','-','*','/'])
  @IsNotEmpty()
  action: string;
  @IsInt()
  @IsOptional()
  result: number;
//   @IsBoolean()
//   @IsOptional()
//   successOperation: boolean = false;
//   @IsBoolean()
//   @IsOptional()
//   forcedRefresh: boolean = false;
}
