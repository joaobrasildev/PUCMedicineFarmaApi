import {MigrationInterface, QueryRunner} from "typeorm";

export class medicine1650068371265 implements MigrationInterface {
    name = 'medicine1650068371265'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "medicines" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "unitMeasure" character varying NOT NULL, "milligram" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_77b93851766f7ab93f71f44b18b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "medicines"`);
    }

}
