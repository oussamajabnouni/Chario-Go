import { Field, ID, ObjectType, InputType } from 'type-graphql';

@InputType({ description: 'New Category Data' })
export class AddCategoryInput implements Partial<Category> {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field({ defaultValue: null })
  value: string;

  @Field({ defaultValue: null })
  type: string;

  @Field({ nullable: true })
  icon: string;

  @Field({ nullable: true })
  slug: string;

  // @Field({ nullable: true })
  // number_of_product?: number;

  @Field({ nullable: true })
  creation_date: Date;
}


@ObjectType()
export default class Category {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  type?: string;

  @Field(type => [Category], { nullable: true })
  children?: Category[];

  @Field()
  icon: string;

  @Field()
  slug: string;
  // You should resolve this field by using @FieldResolver decorator within your Category Resolver Class.
  @Field({ defaultValue: 0 })
  number_of_product?: number;

  @Field()
  creation_date: Date;
}
