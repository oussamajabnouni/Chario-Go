import { ObjectType, Field, InputType, Int, ID } from 'type-graphql';
import Address from './address.type';
import Contact from './contact.type';
import Card from './card.type';

@InputType()
export class SignUpInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@ObjectType()
export class Role {
  @Field()
  name: string;
}

@ObjectType()
export default class User {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  image: string;

  @Field(type => Role)
  role: Role;

  @Field(type => [Address])
  address: Address[];

  @Field(type => [Contact])
  contact: Contact[];

  @Field(type => [Card])
  card: Card[];

  @Field()
  createdAt: Date;
}
