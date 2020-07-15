import { Resolver, Query, Arg, Args, Mutation } from 'type-graphql';
const { Op } = require("sequelize");
import Product from './product.type';
import Products from './products.type';
import { GetProductsArgs } from './product.type';
import { AddProductInput } from './product.type';

const models = require('../../../models')

@Resolver()
export default class ProductResolver {

  @Query((returns) => Products, { description: 'Get all the products' })
  async products(
    @Args()
    { limit, offset, sortByPrice, type, searchText, category, locationState, locationCity }: GetProductsArgs
  ): Promise<Products> {
    let where = {};
    let order;
    let include: any = [{ all: true }];
    if (searchText) {
      where = {
        ...where,
        title: { [Op.like]: `%${searchText}%` }
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
    if (locationState && locationCity) {
      include = [...include, {
        model: models.Address,
        where: { 'city': locationCity, "state": locationState },
        as: 'deliverTo',
      }]
    };
    if (sortByPrice) {
      if (sortByPrice === 'highestToLowest') {
        order = [['price', 'DESC']]
      }
      if (sortByPrice === 'lowestToHighest') {
        order = [['price', 'ASC']]
      }
    }
    const items = await models.Product
      .findAll({
        include,
        where,
        order,
        limit,
        offset
      })
    const count = await models.Product
      .count({
        where,
        order,
      })
    const totalCount = await models.Product
      .count()
    const hasMore = count > offset + limit;

    return {
      items,
      totalCount,
      hasMore,
    };
  }

  @Query(() => Product)
  async product(@Arg('slug') slug: string): Promise<Product | undefined> {
    return await models.Product.findOne({ where: { slug }, include: [{ all: true }] });
  }

  @Mutation(() => Product, { description: 'Create Category' })
  async createProduct(
    @Arg('product') product: AddProductInput
  ): Promise<Product> {

    const new_product = await models.Product.create(product);
    await new_product.setCategories(product.categories)
    // product.categories.forEach(async (category_id: string) => {
    //   await models.Product.create(product);
    // })
    return new_product;
  }
}
