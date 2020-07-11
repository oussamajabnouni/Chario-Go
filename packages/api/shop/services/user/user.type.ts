import { ObjectType, Field,InputType, Int ,ID} from 'type-graphql';
import Address from './address.type';
import Contact from './contact.type';
import Card from './card.type';

@InputType()
export class signUpInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@ObjectType()
export default class User {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
  
  //column is database field and doesn't apear in the schema

  @Field(type => [Address])
  address: Address[];

  @Field(type => [Contact])
  contact: Contact[];

  @Field(type => [Card])
  card: Card[];
}
