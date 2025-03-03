import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";
import { Column, Entity } from "typeorm";
import { BaseEntity } from "../configs/base-entity.config";

@Entity()
export class Task extends BaseEntity {
  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;

  @Column({ type: "timestamp" })
  @IsDateString()
  due?: string;
}
