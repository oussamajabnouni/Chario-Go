import { InputType, Field, Int } from 'type-graphql';


@InputType()
export class OrderProductInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  type: string;

  @Field()
  image: string;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  quantity: number;

  @Field()
  total: number;

}

@InputType()
export default class AddOrderInput {

  @Field(() => Int)
  status: number;

  @Field()
  deliveryTime: string;

  @Field()
  deliveryAddress: string;

  @Field()
  deliveryFee: number;

  @Field()
  contact_number: string;

  @Field(() => Int)
  discount: number;

  @Field(() => Int)
  amount: number;

  @Field(() => Int)
  subtotal: number;

  @Field(() => Int)
  number_of_product: number;

  @Field()
  userId: string;

  @Field()
  payment_method: string;

  @Field(type => [OrderProductInput])
  products: OrderProductInput[];
}
