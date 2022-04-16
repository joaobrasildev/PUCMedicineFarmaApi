import {MigrationInterface, QueryRunner} from "typeorm";

export class adjustments1650072990036 implements MigrationInterface {
    name = 'adjustments1650072990036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medicines_user" DROP COLUMN "medicine_id"`);
        await queryRunner.query(`ALTER TABLE "medicines_user" ADD "medicine_id" uuid`);
        await queryRunner.query(`ALTER TABLE "medicines_user" ADD CONSTRAINT "FK_3154f796491e0c8f2a94dc5764c" FOREIGN KEY ("medicine_id") REFERENCES "medicines"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medicines_user" DROP CONSTRAINT "FK_3154f796491e0c8f2a94dc5764c"`);
        await queryRunner.query(`ALTER TABLE "medicines_user" DROP COLUMN "medicine_id"`);
        await queryRunner.query(`ALTER TABLE "medicines_user" ADD "medicine_id" character varying NOT NULL`);
    }

}
