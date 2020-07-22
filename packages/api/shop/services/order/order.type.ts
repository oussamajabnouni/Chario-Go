import { ObjectType, Field } from 'type-graphql';
import OrderProduct from './orderProduct.type';

@ObjectType()
export default class Order {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field(type => [OrderProduct])
  products: OrderProduct[];

  @Field(type => String)
  status: string;

  @Field()
  payment_method: string;

  @Field()
  contact_number: string;

  @Field(type => String)
  deliveryTime: string;

  @Field(type => String)
  amount: number;

  @Field(type => String)
  subtotal: number;

  @Field(type => String)
  discount: number;

  @Field(type => String)
  deliveryFee: number;

  @Field(type => String)
  deliveryAddress: string;

  @Field(type => String)
  date: string;
}
