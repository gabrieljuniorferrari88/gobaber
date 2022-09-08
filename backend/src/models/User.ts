import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @CreateDateColumn()
  create_at: Date

  @UpdateDateColumn()
  update_at: Date
}

export default User
// parei na aula 03 criação de registros
// com erro no banco de dados
// {
// 	"error": "null value in column \"provider_id\" of relation \"appointments\" violates not-null constraint"
// }
