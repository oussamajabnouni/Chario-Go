import { Resolver, Query, Arg, Int, Mutation } from 'type-graphql';
import loadOrders from './order.sample';
import Order from './order.type';
import AddOrderInput from './order.input'

const models = require('../../models')

@Resolver()
export class OrderResolver {
  private readonly items: Order[] = loadOrders();

  @Query(() => [Order], { description: 'Get all the Orders' })
  async orders(
    @Arg('user', type => Int, { nullable: true }) user: number,
    @Arg('text', type => String, { nullable: true }) text: string,
    @Arg('limit', type => Int, { defaultValue: 7 }) limit: number,
    @Arg("status", type => String, { nullable: true }) status: string,
    @Arg("searchText", type => String, { defaultValue: "" }) searchText: string
  ): Promise<Order[]> {
    // return await take(this.items.filter(item => item.userId === user), limit);
    return await models.Order
      .findAll({
        include: [{ all: true }],
      })
  }

  @Query(() => Order, { description: 'Get single order' })
  async order(@Arg('id', type => Int) id: string): Promise<Order | undefined> {
    return await models.Order.findOne({ where: { id } });
  }

  @Mutation(() => Order, { description: 'Add an Order' })
  async addOrder(@Arg('orderInput') orderInput: AddOrderInput): Promise<Order> {
    const new_order = await models.Order.create(orderInput, { include: [{ model: models.OrderProduct, as: 'products' }] });


    return new_order;
  }

  @Mutation(() => Order, { nullable: true, description: 'Delete Order' })
  async deleteOrder(
    @Arg('id') id: String
  ): Promise<Order> {
    let affectedRow = await models.Order.findOne({ where: { id } });
    await models.Order.destroy({ where: { id: id } });
    return affectedRow;
  }
  // @Mutation(returns => Order, { description: 'Add an Order' })
  // async addOrder(@Arg('orderInput') orderInput: Order): Promise<Order> {
  //   console.log(orderInput, 'orderinput');
  //   return await orderInput;
  // }
}
