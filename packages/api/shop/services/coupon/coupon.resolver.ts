import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import loadCoupons from './coupon.sample';
import Coupon from './coupon.type';
import { AddCouponInput } from './coupon.type';

@Resolver()
export class CouponResolver {
  private readonly items: Coupon[] = loadCoupons();

  @Query(returns => [Coupon], { description: 'Get All Coupons' })
  async coupons(
    @Arg('status', { nullable: true }) status?: string,
    @Arg('searchBy', { nullable: true }) searchBy?: string
  ): Promise<Coupon[] | undefined> {
    let coupons = this.items;
    return coupons
    // if (status) {
    //   coupons = coupons.filter(coupon => coupon.status === status);
    // }
    // return await search(coupons, ['title', 'code'], searchBy);
  }

  // @Mutation(returns => Coupon)
  // async createCoupon(
  //   @Arg('coupon') coupon: AddCouponInput
  // ): Promise<Coupon> {
  //   let coupons = this.items;
  //   return coupons
  // }

  // @Mutation(() => Coupon)
  // async applyCoupon(@Arg('code') code: string): Promise<Coupon> {
  //   const coupon = await this.items.find(
  //     item => item.code.toLowerCase() === code.toLowerCase()
  //   );

  //   return coupon;

  // }
}
