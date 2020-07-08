import { Resolver, Query, Arg, ID, Mutation } from "type-graphql";
import loadCategories from "./category.sample";
import Category from "./category.type";
import search from "../../helpers/search";
import AddCategoryInput from "./category.input_type";

@Resolver()
export class CategoryResolver {
  private readonly items: Category[] = loadCategories();

  @Query((returns) => [Category], { description: "Get all the categories" })
  async categories(
    @Arg("type", { nullable: true }) type?: string,
    @Arg("searchBy", { defaultValue: "" }) searchBy?: string
  ): Promise<Category[]> {
    let categories = this.items;

    if (type) {
      categories = await categories.filter(
        (category) => category.type === type
      );
    }
    return await search(categories, ["name"], searchBy);
  }

  @Query((returns) => Category)
  async category(
    @Arg("id", (type) => ID) id: string
  ): Promise<Category | undefined> {
    return await this.items.find((items) => items.id === id);
  }

  @Mutation(() => Category, { description: "Create Category" })
  async createCategory(
    @Arg("category") category: AddCategoryInput
  ): Promise<Category> {
    console.log(category, "category");

    return await category;
  }
}
