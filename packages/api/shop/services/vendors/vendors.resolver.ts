import { Resolver, Query,Mutation, Arg, Args } from 'type-graphql';
const { Op } = require("sequelize");
import { Vendor } from './vendor.type';
import { Vendors } from './vendor.type';
import { GetVendorsArgs } from './vendor.type';

const models = require('../../../models')

@Resolver()
export class VendorResolver {

  @Query(() => Vendors, { description: 'Get all the vendors' })
  async vendors(
    @Args() { offset, limit, text, type, category }: GetVendorsArgs
  ): Promise<Vendors | undefined> {
    let where = {};
    let order;
    let include: any = [{ all: true }];
    if (text) {
      where = {
        ...where,
        name: { [Op.like]: `%${text}%` }
      }
    }
    if (type) {
      where = {
        ...where,
        type
      }
    }
    if (category) {
      include = [...include, {
        model: models.Category,
        where: { 'slug': category },
        as: 'categories',
      }]
    };
    const items = await models.Vendor
      .findAll({
        include,
        where,
        order,
        limit,
        offset
      })
    const count = await models.Vendor
      .count({
        where,
        order,
      })
    const totalCount = await models.Vendor
      .count()
    const hasMore = count > offset + limit;

    return {
      items,
      totalCount,
      hasMore,
    };
  }

  @Query(() => Vendor)
  async vendor(
    @Arg('slug', (type) => String) slug: string
  ): Promise<Vendor | undefined> {
    return await models.Vendor.findOne({ where: { slug }, include: [{ all: true }] });
  }

  @Mutation(() => Vendor, { nullable: true , description: 'Delete Vendor' })
  async deleteVendor(
    @Arg('id') id: String
  ): Promise<Vendor> {
      let affectedRow = await models.Vendor.findOne({ where: { id }});
      await models.Vendor.destroy({ where: { id: id } });
      return affectedRow;
  }
}
