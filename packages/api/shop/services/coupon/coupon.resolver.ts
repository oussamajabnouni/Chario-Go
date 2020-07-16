import { Resolver, Query, Mutation, Arg } from 'type-graphql';
const { Op } = require("sequelize");
import Coupon from './coupon.type';
import { AddCouponInput } from './coupon.type';
import {UpdateCouponInput} from './coupon.type';

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

  @Mutation(() => Coupon, { nullable: true , description: 'Update Coupon' })
  async updateCoupon(
    @Arg('coupon') coupon: UpdateCouponInput
  ): Promise<Coupon> {
      let affectedRow = await models.Coupon.findOne({ where: { id:coupon.id }});
      await models.Coupon.update(coupon,
        { where: { id: coupon.id } });
      return affectedRow;
  }

  @Mutation(() => Coupon, { nullable: true , description: 'Delete Coupon' })
  async deleteCoupon(
    @Arg('id') id: String
  ): Promise<Coupon> {
      let affectedRow = await models.Coupon.findOne({ where: { id }});
      await models.Coupon.destroy({ where: { id: id } });
      return affectedRow;
  }

  // @Mutation(() => Coupon)
  // async applyCoupon(@Arg('code') code: string): Promise<Coupon> {
  //   const coupon = await this.items.find(
  //     item => item.code.toLowerCase() === code.toLowerCase()
  //   );

  //   return coupon;

  // }
}
