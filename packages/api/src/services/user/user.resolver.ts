import { Resolver, Query, Arg, Mutation, Ctx } from "type-graphql";
const { Op } = require("sequelize");
import User from "./user.type";
import Address, { AddAddressInput } from "./address.type";
import Card, { AddCardInput } from "./card.type";
import Contact, { AddContactInput } from "./contact.type";
import { UpdateUserInput } from "./user.type";
import bcrypt from "bcryptjs";
import { SignUpInput } from "./user.type";
import { MyContext } from "../../types/context";
import { filterOrder } from '../../helpers/filter';

const models = require("../../models/");

@Resolver()
export class UserResolver {

  @Query(() => User)
  async me(@Arg("id") id: string): Promise<User> {
    return await models.User.findOne({
      where: { id },
      include: [
        { all: true, include: [{ all: true }] }]
    });
  }

  @Query(() => [User])
  async users(
    @Arg("role", { nullable: true }) role?: string,
    @Arg("email", { nullable: true }) email?: string
  ): Promise<User[]> {
    let where: any = {};
    let include: any = [{ all: true }];
    if (email) {
      where = {
        ...where,
        email: { [Op.like]: `%${email}%` },
      };
    }
    if (role) {
      include = [
        {
          model: models.Role,
          where: { name: role },
          as: "role",
        },
      ];
    }
    return await models.User.findAll({
      where,
      include,
    });
  }

  @Mutation(() => User, { description: "create user" })
  async signUp(@Arg("user") user: SignUpInput): Promise<User | Error> {
    // checking if email exist
    const userExit = await models.User.findOne({
      where: { email: user.email },
    });
    if (userExit) {
      return new Error("User Already registered with this email");
    }
    try {
      const hashedPassword = await bcrypt.hash(user.password, 12);
      var newuser = await models.User.create(
        {
          name: user.name,
          email: user.email,
          password: hashedPassword,
          roleId: 2,
        },
        { include: "role" }
      );
    } catch (err) {
      err;
    }
    return newuser;
  }

  @Mutation(() => User, { nullable: true })
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() ctx: MyContext
  ): Promise<User | Error> {
    const user = await models.User.findOne({
      where: { email },
      include: "role",
    });

    if (!user) {
      return new Error("User does not exist");
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return new Error("Password is incorrect");
    }

    ctx.req.session!.userId = user.id;
    return user;
  }

  @Mutation(() => User, { nullable: true, description: "Delete User" })
  async deleteUser(@Arg("id") id: String): Promise<User> {
    let affectedRow = await models.User.findOne({ where: { id } });
    await models.User.destroy({ where: { id: id } });
    return affectedRow;
  }

  @Mutation(() => Address, { nullable: true, description: "Delete Address" })
  async deleteAddress(@Arg("addressId") addressId: String): Promise<Address> {
    let affectedRow = await models.Address.findOne({ where: { id: addressId } });
    await models.Address.destroy({ where: { id: addressId } });
    return affectedRow;
  }
  @Mutation(() => Contact, { nullable: true, description: "Delete Contact" })
  async deleteContact(@Arg("contactId") contactId: String): Promise<Contact> {
    let affectedRow = await models.Contact.findOne({ where: { id: contactId } });
    await models.Contact.destroy({ where: { id: contactId } });
    return affectedRow;
  }

  @Mutation(() => Card, { nullable: true, description: "Delete Card" })
  async deleteCard(@Arg("id") id: String): Promise<Card> {
    let affectedRow = await models.Card.findOne({ where: { id } });
    await models.Card.destroy({ where: { id: id } });
    return affectedRow;
  }

  @Mutation(() => User, { nullable: true, description: "Update User" })
  async updateMe(@Arg("user") user: UpdateUserInput): Promise<User> {
    let affectedRow = await models.User.findOne({ where: { id: user.id } });
    await models.User.update(user, { where: { id: user.id } });
    return affectedRow;
  }

  // @Mutation(() => User, { description: 'Add or Edit Address' })
  // async updateAddress(
  //   @Arg('addressInput') addressInput: string
  // ): Promise<User> {
  //   console.log(addressInput, 'addressinput');
  //   return await this.items[0];
  // }

  @Mutation(() => Card, { nullable: true, description: "Add Address" })
  async addAddress(@Arg("userId") userId: String, @Arg("addressInput") addressInput: AddAddressInput): Promise<Address> {
    return await models.Address.create({ userId, ...addressInput });
  }

  @Mutation(() => Card, { nullable: true, description: "Add Contact" })
  async addContact(@Arg("userId") userId: String, @Arg("contactInput") contactInput: AddContactInput): Promise<Contact> {
    return await models.Contact.create({ userId, ...contactInput });
  }

  // @Mutation(() => User, { description: 'Add or Edit Contact' })
  // async updateContact(
  //   @Arg('contactInput') contactInput: string
  // ): Promise<User> {
  //   console.log(contactInput, 'contactinput');
  //   return await this.items[0];
  // }

  @Mutation(() => User, { description: 'Add Payment Card' })
  async addPaymentCard(@Arg('userId') userId: string, @Arg('cardInput') cardInput: AddCardInput): Promise<User> {
    return await models.Address.create({ userId, ...cardInput });
  }

  @Mutation(() => User, { description: 'Delete Payment Card' })
  async deletePaymentCard(@Arg('cardId') cardId: string): Promise<User> {
    let affectedRow = await models.Card.findOne({ where: { id: cardId } });
    await models.Card.destroy({ where: { id: cardId } });
    return affectedRow;
  }
}
