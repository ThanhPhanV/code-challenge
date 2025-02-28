import { IsOptional, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BaseEntity {
  @IsOptional() // use for validation user input
  @PrimaryGeneratedColumn()
  id?: number;

  // createdDate, updatedDate, createdBy, updatedBy in postgres
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @IsOptional()
  createdDate?: string;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  @IsString()
  @IsOptional()
  updatedDate?: string;
}
