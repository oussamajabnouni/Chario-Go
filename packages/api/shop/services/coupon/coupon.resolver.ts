import { Resolver, Query, Mutation, Arg } from "type-graphql";
import loadCoupons from "./coupon.sample";
import Coupon from "./coupon.type";
import AddCouponInput from "./coupon.input_type";
import search from "../../helpers/search";

@Resolver()
export class CouponResolver {
  private readonly items: Coupon[] = loadCoupons();

  @Query((returns) => [Coupon], { description: "Get All Coupons" })
  async coupons(
    @Arg("status", { nullable: true }) status?: string,
    @Arg("searchBy", { nullable: true }) searchBy?: string
  ): Promise<Coupon[] | undefined> {
    let coupons = this.items;
    if (status) {
      coupons = coupons.filter((coupon) => coupon.status === status);
    }
    return await search(coupons, ["title", "code"], searchBy);
  }

  @Mutation(() => Coupon)
  async applyCoupon(@Arg("code") code: string): Promise<Coupon> {
    const coupon = await this.items.find(
      (item) => item.code.toLowerCase() === code.toLowerCase()
    );

    if (coupon) {
      return coupon;
    }
    return {
      id: 0,
      code: "DEFAULT_COUPON",
      discountInPercent: 0,
    };
  }

  @Mutation((returns) => Coupon)
  async createCoupon(
    @Arg("coupon") coupon: AddCouponInput
  ): Promise<Coupon | undefined> {
    console.log(coupon, "coupon");

    return await coupon;
  }
}
