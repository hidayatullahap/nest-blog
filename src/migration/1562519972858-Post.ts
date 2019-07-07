import {MigrationInterface, QueryRunner} from "typeorm";

export class Post1562519972858 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `post` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `content` varchar(255) NULL, `slug` varchar(255) NOT NULL, `view` int NOT NULL DEFAULT 0, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `post`");
    }

}
