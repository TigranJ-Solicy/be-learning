import { Entity, ObjectIdColumn, Column, ObjectId } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  id!: ObjectId;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
