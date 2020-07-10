import { ObjectType, Field, InputType } from 'type-graphql';
import Category from '../category/category.type';
import PaginatedResponse from '../../helpers/paginated-response';

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
}

registerEnumType(ProductType, {
  name: 'ProductType',
  description: 'The basic product types',
});


@InputType()
export class ProductSearchInput {
  @Field({ nullable: true })
  id?: number;

  @Field()
  type: ProductType;

  @Field({ nullable: true })
  category?: string;

  @Field({ defaultValue: 0 })
  offset: number;

  @Field({ defaultValue: 10 })
  limit: number;
}


@ObjectType()
class Gallery {
  @Field()
  url: string;
}


@ObjectType()
export default class Product {
  @Field()
  id: number;

  @Field()
  slug: string;

  @Field()
  title: string;

  @Field(() => ProductType)
  type: ProductType;

  @Field(() => [Category])
  categories: Category[];

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

  @Field()
  salePrice: number;

  @Field()
  discountInPercent: number;

  @Field()
  createdAt: Date;
}

// TODO: Need to change this in next update

// we need to create a temporary class for the abstract, generic class "instance"
@ObjectType()
export class ProductResponse extends PaginatedResponse(Product) {
  // simple helper for creating new instances easily
  constructor(productResponse: ProductResponse) {
    super();
    Object.assign(this, productResponse);
  }

  // you can add more fields here if you need
}
