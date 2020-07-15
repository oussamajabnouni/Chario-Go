import { ObjectType, Field, Int, Float, InputType, ArgsType, ID } from 'type-graphql';
import Category from '../category/category.type';
import Address from '../user/address.type';

import { registerEnumType } from 'type-graphql';

export enum ProductType {
  BOOK = 'book',
  BAGS = 'bags',
  GROCERY = 'grocery',
  MEDICINE = 'medicine',
  CLOTH = 'cloth',
  CLOTHING = 'clothing',
  FURNITURE = 'furniture',
  MAKEUP = 'makeup',
  FOOD = 'food',
}

registerEnumType(ProductType, {
  name: 'ProductType',
  description: 'The basic product types',
});

@ArgsType()
export class GetProductsArgs {
  @Field(type => Int, { defaultValue: 12 })
  limit: number;

  @Field(type => Int, { defaultValue: 0 })
  offset: number;

  @Field({ nullable: true })
  sortByPrice?: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  searchText?: string;

  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  locationState?: string;

  @Field({ nullable: true })
  locationCity?: string;
}

@InputType({ description: 'New product data' })
export class AddProductInput implements Partial<Product> {
  @Field()
  title: string;

  @Field()
  slug: string;

  @Field({ nullable: true })
  image: string;

  @Field(() => ProductType)
  type: ProductType;

  @Field({ defaultValue: '1' })
  unit: string;

  @Field(type => Int)
  price: number;

  @Field(type => Float, { nullable: true })
  salePrice: number;

  @Field(type => Int, { defaultValue: 0 })
  discountInPercent: number;

  @Field(type => Int, { defaultValue: 1 })
  per_unit: number;

  @Field(type => Int, { nullable: true })
  quantity: number;

  @Field({ nullable: true })
  description?: string;

}


@ObjectType()
class Gallery {
  @Field()
  url: string;
}


@ObjectType()
export default class Product {
  @Field()
  id: string;

  @Field()
  slug: string;

  @Field()
  title: string;

  @Field(() => ProductType)
  type: ProductType;

  @Field(() => [Category])
  categories: Category[];

  @Field(() => [Address])
  deliverTo: Address[];

  @Field()
  unit: string;

  @Field()
  image: string;

  @Field(() => [Gallery])
  gallery: Gallery[];

  @Field()
  description: string;

  @Field()
  price: number;

  @Field(type => Int, { nullable: true })
  views?: number;

  @Field()
  salePrice: number;

  @Field()
  discountInPercent: number;

  @Field()
  createdAt: Date;
}

