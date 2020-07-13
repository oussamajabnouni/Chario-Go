import { ObjectType, Field, InputType } from 'type-graphql';

@InputType({ description: 'New recipe data' })
export class AddAddressInput {
  @Field()
  type: string;

  @Field()
  title: string;

  @Field()
  location: string;
}

@ObjectType()
export default class Address {
  @Field()
  id: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  info: string;
}
