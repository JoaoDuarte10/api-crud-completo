import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserMigration1625186324542 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isGenerated: true,
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "password",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "admin",
                    type: "boolean",
                    default: false
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
