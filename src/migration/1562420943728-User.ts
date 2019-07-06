import {MigrationInterface, QueryRunner} from "typeorm";

export class User1562420943728 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `full_name`");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `full_name` varchar(25) NOT NULL");
    }

}
