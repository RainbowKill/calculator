import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1712708115160 implements MigrationInterface {
    name = 'NewMigration1712708115160'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`calculator_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`key\` varchar(255) NOT NULL, \`firstNum\` int NOT NULL, \`secondNum\` int NOT NULL, \`action\` varchar(255) NOT NULL, \`result\` int NOT NULL, UNIQUE INDEX \`IDX_db8d9f243c2c2f9757997e42d0\` (\`key\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_db8d9f243c2c2f9757997e42d0\` ON \`calculator_entity\``);
        await queryRunner.query(`DROP TABLE \`calculator_entity\``);
    }

}
