import { Transform } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class GetTaskById {
  @Transform(({ value }) => Number(value))
  @IsOptional()
  id: number;
}
