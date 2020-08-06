import { ObjectType, Field, InputType } from 'type-graphql';

@InputType({ description: 'New recipe data' })
export class AddContactInput implements Partial<Contact> {
  @Field()
  type: string;

  @Field()
  number: string;
}

@ObjectType()
export default class Contact {
  @Field()
  id: string;

  @Field()
  type: string;

  @Field()
  number: string;
}
