import {
  ObjectType,
  Field,
  Int,
  Float,
  InputType,
  ArgsType,
  ID,
} from "type-graphql";
import Category from "../category/category.type";
import Address from "../user/address.type";

import { registerEnumType } from "type-graphql";

export enum ProductType {
  book = "book",
  bags = "bags",
  grocery = "grocery",
  medicine = "medicine",
  cloth = "cloth",
  clothing = "clothing",
  furniture = "furniture",
  makeup = "makeup",
  food = "food",
}

registerEnumType(ProductType, {
  name: "ProductType",
  description: "The basic product types",
});

@ArgsType()
export class GetProductsArgs {
  @Field((type) => Int, { defaultValue: 12 })
  limit: number;

  @Field((type) => Int, { defaultValue: 0 })
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

@InputType({ description: "New product data" })
export class AddProductInput {
  @Field()
  title: string;

  @Field()
  slug: string;

  @Field({ nullable: true })
  image: string;

  @Field(() => ProductType)
  type: ProductType;

  @Field({ defaultValue: "1" })
  unit: string;

  @Field(() => Int)
  price: number;

  @Field(() => Int, { defaultValue: 0 })
  discountInPercent: number;

  @Field(() => Int, { defaultValue: 1 })
  per_unit: number;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [String])
  categories: string[];

  @Field(() => [String], { nullable: true })
  deliverTo: string[];

  @Field(() => [String], { nullable: true })
  galleries: string[];
}

@InputType({ description: "Update product data" })
export class UpdateProductInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  slug: string;

  @Field({ nullable: true })
  image: string;

  @Field(() => ProductType,{ nullable: true })
  type: ProductType;

  @Field({ nullable: true })
  unit: string;

  @Field({ nullable: true })
  price: number;

  @Field({ nullable: true })
  discountInPercent: number;

  @Field({ nullable: true })
  per_unit: number;

  @Field({ nullable: true })
  description: string;

  @Field(() => [String],{ nullable: true })
  categories: string[];

  @Field(() => [String],{ nullable: true })
  deliverTo: string[];
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

  @Field(() => String)
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

  @Field((type) => Int, { nullable: true })
  views?: number;

  @Field()
  discountInPercent: number;

  @Field()
  createdAt: Date;
}
