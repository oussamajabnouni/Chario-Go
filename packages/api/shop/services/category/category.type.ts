import { ObjectType, Field, Int, ID } from "type-graphql";

@ObjectType()
export default class Category {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  title: string;

  @Field((type) => [Category])
  children: Category[];

  @Field({ nullable: true })
  type?: string;

  @Field((type) => String)
  icon: string;

  @Field((type) => String)
  slug: string;

  @Field({ defaultValue: 0 })
  number_of_product?: number;

  @Field()
  creation_date: Date;
}
