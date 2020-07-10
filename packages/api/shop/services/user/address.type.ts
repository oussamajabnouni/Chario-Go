import { ObjectType, Field, InputType } from 'type-graphql';

@InputType({ description: 'New recipe data' })
export class AddAddressInput implements Partial<Address> {
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
  type: string;

  @Field()
  name: string;

  @Field()
  info: string;
}
