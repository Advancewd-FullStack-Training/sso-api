import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer";
import { UserScopeEntity } from '../user-scope/user-scope.entity';
import { UserClientEntity } from '../user-client/user-client.entity';

@Entity({ name: "user" })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Exclude()
  @Column({ nullable: true })
  password: string;

  @Column({ name: "full_name" })
  fullName: string;

  @Column({ nullable: true })
  bio: string

  @Column({ name: "avatar_url", nullable: true })
  avatarUrl: string

  @Column("json")
  data: any = {}

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  // RELATIONs
  @OneToMany(type => UserClientEntity, e => e.userId, {
    cascade: true
  })
  userClients: UserClientEntity[]

  @OneToMany(type => UserScopeEntity, e => e.userId, {
    cascade: true
  })
  userScopes: UserScopeEntity[]
}