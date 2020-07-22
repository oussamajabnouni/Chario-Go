import { InputType, Field, ID } from 'type-graphql';

@InputType()
export default class OrderInput {
  @Field(type => ID)
  id: string;
  @Field()
  address: string;

  @Field()
  contact: string;

  @Field()
  payment: string;

  @Field()
  schedule: string;

  @Field()
  quantity: number;

  @Field()
  price: number;

  @Field(type => [String])
  products: string[];
}
