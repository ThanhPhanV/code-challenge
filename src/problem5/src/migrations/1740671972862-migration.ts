import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1740671972862 implements MigrationInterface {
    name = 'Migration1740671972862'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "createdDate" TIMESTAMP NOT NULL, "updatedDate" TIMESTAMP NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "due" TIMESTAMP NOT NULL, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "task"`);
    }

}
