import {MigrationInterface, QueryRunner} from "typeorm";

export class medicineUser1650070508096 implements MigrationInterface {
    name = 'medicineUser1650070508096'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "medicines_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "medicine_id" character varying NOT NULL, "user_id" character varying NOT NULL, "amount" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_119d6471c7fd923cdd7f9528316" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "medicines_user"`);
    }

}
