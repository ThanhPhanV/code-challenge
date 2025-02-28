import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1740672678673 implements MigrationInterface {
    name = 'Migration1740672678673'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "createdDate" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "updatedDate" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "updatedDate" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "createdDate" DROP DEFAULT`);
    }

}
