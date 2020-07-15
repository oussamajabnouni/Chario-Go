import { Resolver, Query, Arg, Mutation, Ctx } from 'type-graphql';
const { Op } = require("sequelize");
import User from './user.type';
import bcrypt from "bcryptjs";
import { SignUpInput } from "./user.type";
import { MyContext } from '../../types/context';

const models = require('../../../models')

@Resolver()
export class UserResolver {

  @Query(() => User)
  async me(@Arg('id') id: string): Promise<User> {
    return await models.User.findAll({ where: { id }, include: 'role' });
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
        email: { [Op.like]: `%${email}%` }
      }
    }
    if (role) {
      include = [{
        model: models.Role,
        where: { 'name': role },
        as: 'role',
      }]
    }
    return await models.User.findAll({
      where,
      include
    })
  }


  @Mutation(() => User, { description: 'create user' })
  async signUp(@Arg("user") user: SignUpInput): Promise<User | Error> {
    // checking if email exist
    const userExit = await models.User.findOne({ where: { email: user.email } });
    if (userExit) {
      return new Error("User Already registered with this email")
    }
    try {
      const hashedPassword = await bcrypt.hash(user.password, 12)
      var newuser = await models.User.create(
        {
          name: user.name,
          email: user.email,
          password: hashedPassword,
          roleId: 2
        }, { include: 'role' }
      )
    }
    catch (err) {
      err
    }
    return newuser;
  }

  @Mutation(() => User, { nullable: true })
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() ctx: MyContext
  ): Promise<User | Error> {
    const user = await models.User.findOne({ where: { email }, include: 'role' });

    if (!user) {
      return new Error("User does not exist")
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return new Error("Password is incorrect")
    }

    ctx.req.session!.userId = user.id;
    return user;
  }


  // @Mutation(() => User, { description: 'Update User' })
  // async updateMe(@Arg('meInput') meInput: string): Promise<User> {
  //   return await this.items[0];
  // }

  // @Mutation(() => User, { description: 'Add or Edit Address' })
  // async updateAddress(
  //   @Arg('addressInput') addressInput: string
  // ): Promise<User> {
  //   console.log(addressInput, 'addressinput');
  //   return await this.items[0];
  // }

  // @Mutation(() => User, { description: 'Add or Edit Contact' })
  // async updateContact(
  //   @Arg('contactInput') contactInput: string
  // ): Promise<User> {
  //   console.log(contactInput, 'contactinput');
  //   return await this.items[0];
  // }

  // @Mutation(() => User, { description: 'Delete Address' })
  // async deleteAddress(@Arg('addressId') addressId: string): Promise<User> {
  //   console.log(addressId, 'address_id');
  //   return await this.items[0];
  // }

  // @Mutation(() => User, { description: 'Delete Contact' })
  // async deleteContact(@Arg('contactId') contactId: string): Promise<User> {
  //   console.log(contactId, 'contact_id');
  //   return await this.items[0];
  // }

  // @Mutation(() => User, { description: 'Add Payment Card' })
  // async addPaymentCard(@Arg('cardInput') cardInput: string): Promise<User> {
  //   console.log(cardInput, 'cardInput');
  //   return await this.items[0];
  // }

  // @Mutation(() => User, { description: 'Delete Payment Card' })
  // async deletePaymentCard(@Arg('cardId') cardId: string): Promise<User> {
  //   console.log(cardId, 'card_id');
  //   return await this.items[0];
  // }
}
