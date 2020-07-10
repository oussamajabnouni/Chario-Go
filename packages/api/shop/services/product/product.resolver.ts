import { Resolver, Query, Arg, Args, Mutation } from 'type-graphql';
import { createProductSamples } from './product.sample';
import Product from './product.type';
import Products from './products.type';
import { GetProductsArgs } from './product.type';
import { AddProductInput } from './product.type';
import search from '../../helpers/search';
import shuffle from '../../helpers/shuffle';
import { sortByHighestNumber, sortByLowestNumber } from '../../helpers/sorts';

const models = require('../../../models')
@Resolver()
export default class ProductResolver {
  private readonly productsCollection: Product[] = createProductSamples();

  @Query((returns) => Products, { description: 'Get all the products' })
  async products(
    @Args()
    { limit, offset, sortByPrice, type, searchText, category }: GetProductsArgs
  ): Promise<Products> {
    let products = this.productsCollection;
    if (category) {
      products = products.filter((product) =>
        product.categories.find(
          (category_item) => category_item.slug === category
        )
      );
    }
    if (type) {
      products = products.filter((product) => product.type === type);
    }
    if (sortByPrice) {
      if (sortByPrice === 'highestToLowest') {
        products = sortByHighestNumber(products, 'price');
      }
      if (sortByPrice === 'lowestToHighest') {
        products = sortByLowestNumber(products, 'price');
      }
    } else {
      products = shuffle(products);
    }

    // return await products.slice(0, limit);
    products = await search(products, ['name'], searchText);
    const hasMore = products.length > offset + limit;

    return {
      items: products.slice(offset, offset + limit),
      totalCount: this.productsCollection.length,
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
    return await models.Product.create(product);
  }
}
