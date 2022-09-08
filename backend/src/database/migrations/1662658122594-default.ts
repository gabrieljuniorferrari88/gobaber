import { MigrationInterface, QueryRunner } from 'typeorm'

export class default1662658122594 implements MigrationInterface {
  name = 'default1662658122594'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "avatar" character varying`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar"`)
  }
}
