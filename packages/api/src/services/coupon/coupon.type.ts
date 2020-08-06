import { ObjectType, Field, Int, ID, InputType } from 'type-graphql';
import Product from '../product/product.type'
@InputType({ description: 'New coupon data' })
export class AddCouponInput {

  @Field()
  title: string;

  @Field(type => Int)
  number_of_coupon: number;

  @Field(type => Int)
  discount_in_percent: number;

  @Field()
  category: string

  @Field()
  code: string;

  @Field(type => Int, { defaultValue: 0 })
  minimum_amount: number;

  @Field(type => String, { defaultValue: "active" })
  status: string;

}

@InputType()
export class UpdateCouponInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  title: string;

  @Field(type => Int,{ nullable: true })
  number_of_coupon: number;

  @Field(type => Int,{ nullable: true })
  discount_in_percent: number;

  @Field({ nullable: true })
  category: string

  @Field({ nullable: true })
  code: string;

  @Field(type => Int, { nullable: true })
  minimum_amount: number;

  @Field(type => String, { nullable: true })
  status: string;

}

@ObjectType()
export default class Coupon {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field(type => Int)
  number_of_coupon: number;

  @Field(type => Int, { defaultValue: 0 })
  number_of_used_coupon?: number;

  @Field(type => Int)
  discount_in_percent: number;

  @Field()
  category: string;

  @Field(type => [Product], { nullable: true })
  products: Product[];

  @Field()
  code: string;

  @Field(type => Int, { defaultValue: 0 })
  minimum_amount: number;

  @Field({ defaultValue: 'active' })
  status: string;

  @Field({ nullable: true })
  expiration_date?: Date;

  @Field()
  createdAt: Date;
}
