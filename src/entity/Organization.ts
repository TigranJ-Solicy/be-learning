import { Entity, ObjectIdColumn, Column, ObjectId } from "typeorm";

@Entity()
export class Organization {
  @ObjectIdColumn()
  id!: ObjectId;

  @Column()
  organizationName: string;

  @Column()
  organizationFounder: string;

  @Column()
  creatorEmail: string;

  constructor(
    organizationName: string,
    organizationFounder: string,
    creatorEmail: string
  ) {
    this.organizationName = organizationName;
    this.organizationFounder = organizationFounder;
    this.creatorEmail = creatorEmail;
  }
}
