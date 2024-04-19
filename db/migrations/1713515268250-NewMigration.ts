import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1713515268250 implements MigrationInterface {
    name = 'NewMigration1713515268250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`calculator\` (\`firstNum\` int NOT NULL DEFAULT '1', \`secondNum\` int NOT NULL DEFAULT '1', \`action\` varchar(1) NOT NULL DEFAULT '+', \`result\` int NOT NULL DEFAULT '2', UNIQUE INDEX \`IDX_9cf70f00b66d4241a15d00b2c6\` (\`firstNum\`, \`secondNum\`, \`action\`), PRIMARY KEY (\`firstNum\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_9cf70f00b66d4241a15d00b2c6\` ON \`calculator\``);
        await queryRunner.query(`DROP TABLE \`calculator\``);
    }

}
