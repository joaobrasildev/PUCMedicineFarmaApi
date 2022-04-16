import {MigrationInterface, QueryRunner} from "typeorm";

export class adjustments21650073499444 implements MigrationInterface {
    name = 'adjustments21650073499444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medicines_user" DROP CONSTRAINT "FK_3154f796491e0c8f2a94dc5764c"`);
        await queryRunner.query(`ALTER TABLE "medicines_user" ALTER COLUMN "medicine_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "medicines_user" ADD CONSTRAINT "FK_3154f796491e0c8f2a94dc5764c" FOREIGN KEY ("medicine_id") REFERENCES "medicines"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medicines_user" DROP CONSTRAINT "FK_3154f796491e0c8f2a94dc5764c"`);
        await queryRunner.query(`ALTER TABLE "medicines_user" ALTER COLUMN "medicine_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "medicines_user" ADD CONSTRAINT "FK_3154f796491e0c8f2a94dc5764c" FOREIGN KEY ("medicine_id") REFERENCES "medicines"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
