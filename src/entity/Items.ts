import { Entity, ObjectIdColumn, Column, ObjectId } from "typeorm";

@Entity()
export class Item {
  @ObjectIdColumn()
  id!: ObjectId;

  @Column()
  creatorEmail: string;

  @Column()
  organizationName: string;

  @Column()
  name: string;

  @Column()
  description: string;

  constructor(
    creatorEmail: string,
    organizationName: string,
    name: string,
    description: string
  ) {
    this.creatorEmail = creatorEmail;
    this.organizationName = organizationName;
    this.name = name;
    this.description = description;
  }
}
