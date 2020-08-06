import { Resolver, Query, Arg, ID, Mutation } from 'type-graphql';
const { Op } = require("sequelize");
import Category, { UpdateCategoryInput } from './category.type';
import { AddCategoryInput } from './category.type';
const models = require('../../models')

@Resolver()
export class CategoryResolver {
  private categoriesModel: any = models.Category;

  @Query(returns => [Category], { description: 'Get all the categories' })
  async categories(
    @Arg('type', { defaultValue: '', nullable: true }) type?: string,
    @Arg('searchBy', { defaultValue: '', nullable: true }) searchBy?: string,
    @Arg('isParent', { defaultValue: false, nullable: true }) isParent?: boolean
  ): Promise<Category[]> {
    let where = {};
    if (searchBy) {
      where = {
        ...where,
        title: { [Op.like]: `%${searchBy}%` }
      }
    }
    if (type) {
      where = {
        ...where,
        type
      }
    }
    if (isParent) {
      where = {
        ...where,
        parentId: { [Op.is]: null },
      }
    }
    return await models.Category
      .findAll({
        include: [{ all: true }], where
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
  @Mutation(() => Category, { nullable: true, description: 'Delete Category' })
  async deleteCategory(
    @Arg('id') id: String
  ): Promise<Category> {
    let affectedRow = await this.categoriesModel.findOne({ where: { id } });
    await this.categoriesModel.destroy({ where: { id: id } });
    return affectedRow;
  }

  @Mutation(() => Category, { nullable: true, description: 'Update Category' })
  async updateCategory(
    @Arg('category') category: UpdateCategoryInput
  ): Promise<Category> {
    let affectedRow = await this.categoriesModel.findOne({ where: { id: category.id } });
    await this.categoriesModel.update(category,
      { where: { id: category.id } })
    return affectedRow;
  }
}
