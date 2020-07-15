import { Resolver, Query, Mutation, Arg } from 'type-graphql';
const { Op } = require("sequelize");
import Coupon from './coupon.type';
import { AddCouponInput } from './coupon.type';

const models = require('../../../models')

@Resolver()
export class CouponResolver {

  @Query(returns => [Coupon], { description: 'Get All Coupons' })
  async coupons(
    @Arg('status', { nullable: true }) status?: string,
    @Arg('searchBy', { nullable: true }) searchBy?: string
  ): Promise<Coupon[]> {
    let where = {};
    if (status) {
      where = {
        ...where,
        status
      }
    }
    if (searchBy) {
      where = {
        ...where,
        title: { [Op.like]: `%${searchBy}%` }
      }
    }
    const items = await models.Coupon
      .findAll({
        where,
      })
    return items
  }

  @Mutation(returns => Coupon)
  async createCoupon(
    @Arg('coupon') coupon: AddCouponInput
  ): Promise<Coupon> {
    return await models.Coupon.create(coupon);
  }

  // @Mutation(() => Coupon)
  // async applyCoupon(@Arg('code') code: string): Promise<Coupon> {
  //   const coupon = await this.items.find(
  //     item => item.code.toLowerCase() === code.toLowerCase()
  //   );

  //   return coupon;

  // }
}
