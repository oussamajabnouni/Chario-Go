import { Resolver, Query, Arg, ID, Mutation } from 'type-graphql';
const { Op } = require("sequelize");
import Category from './category.type';
import { AddCategoryInput } from './category.type';
const models = require('../../../models')

@Resolver()
export class CategoryResolver {
  private categoriesModel: any = models.Category;

  @Query(returns => [Category], { description: 'Get all the categories' })
  async categories(
    @Arg('type', { defaultValue: '', nullable: true }) type?: string,
    @Arg('searchBy', { defaultValue: '', nullable: true }) searchBy?: string
  ): Promise<Category[]> {

    return await models.Category
      .findAll({
        include: [{ all: true }], where: {
          type: {
            [Op.like]: `%${type}%`
          },
          title: {
            [Op.like]: `%${searchBy}%`
          }
        }
      })
  }

  @Query(returns => Category)
  async category(
    @Arg('id', type => ID) id: string
  ): Promise<Category | undefined> {
    return await this.categoriesModel.findOne({ where: { id }, include: [{ all: true }] });
  }

  @Mutation(() => Category, { description: 'Create Category' })
  async createCategory(
    @Arg('category') category: AddCategoryInput
  ): Promise<Category> {
    return await this.categoriesModel.create(category);
  }
}
