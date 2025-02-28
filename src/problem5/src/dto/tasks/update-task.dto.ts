import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
} from "class-validator";
import { CreateTaskDto } from "./create-task.dto";

export class UpdateTaskDto extends CreateTaskDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsOptional()
  @IsDateString()
  @IsNotEmpty()
  due?: string;
}
