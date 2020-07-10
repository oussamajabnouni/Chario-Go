import { ObjectType, Field, InputType } from 'type-graphql';

@InputType({ description: 'New recipe data' })
export class AddCardInput implements Partial<Card> {
  @Field()
  id: string;

  @Field()
  type: string;

  @Field()
  title: string;

  @Field()
  cardType: string;

  @Field()
  lastFourDigit: number;
}

@ObjectType()
export default class Card {
  @Field()
  id: string;

  @Field()
  type: string;

  @Field()
  name: string;

  @Field()
  cardType: string;

  @Field()
  lastFourDigit: number;
}
