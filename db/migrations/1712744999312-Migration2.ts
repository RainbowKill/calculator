import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration21712744999312 implements MigrationInterface {
    name = 'Migration21712744999312'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_db8d9f243c2c2f9757997e42d0\` ON \`calculator_entity\``);
        await queryRunner.query(`ALTER TABLE \`calculator_entity\` DROP COLUMN \`key\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`calculator_entity\` ADD \`key\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_db8d9f243c2c2f9757997e42d0\` ON \`calculator_entity\` (\`key\`)`);
    }

}
