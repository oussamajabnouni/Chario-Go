import { ObjectType, Field, ID, Int, ArgsType } from 'type-graphql';
import Product from '../product/product.type';

@ArgsType()
export class GetVendorsArgs {
  @Field(() => Int, { defaultValue: 10 })
  limit: number;

  @Field(() => Int, { defaultValue: 0 })
  offset: number;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  text?: string;

  @Field({ nullable: true })
  category?: string;
}


@ObjectType()
export class Vendor {
  @Field(() => ID)
  id: string;

  @Field()
  slug: string;

  @Field()
  type: string;

  @Field(() => [String])
  categories: string[];

  @Field()
  name: string;

  @Field({ nullable: true })
  logoUrl?: string;

  @Field()
  thumbnailUrl: string;

  @Field()
  previewUrl: string;

  @Field({ nullable: true })
  slogan?: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  address?: string;

  @Field()
  charge: string;

  @Field({ nullable: true })
  maximumDistance?: string;

  @Field(() => Int, { nullable: true })
  minimumOrder: number;

  @Field({ defaultValue: true })
  isFree: boolean;

  @Field({ nullable: true })
  promotion?: string;

  @Field(() => [String], { nullable: true })
  owners?: string[];

  @Field(() => [Product], { nullable: true })
  products?: Product[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@ObjectType()
export class Vendors {
  @Field(type => [Vendor], { nullable: true })
  items?: Vendor[];

  @Field(type => Int, { defaultValue: 0 })
  totalCount: number;

  @Field()
  hasMore: boolean;
}
