import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity({ name: "user" })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
}