import { Resolver, Query, Arg, ID, Mutation } from "type-graphql";
import Staff from "./Staff.type";
import loadStaffs from "../../data/Staff.data";
import AddStaffInput from "./Staff.input_type";
import search from "../../helpers/search";
@Resolver()
export default class StaffResolver {
  private readonly StaffsCollection: Staff[] = loadStaffs();

  @Query(() => [Staff])
  async Staffs(
    @Arg("role", { nullable: true }) role?: string,
    @Arg("searchBy", { nullable: true }) searchBy?: string
  ): Promise<Staff[] | undefined> {
    // as auth Staff. check from middleware.
    let Staffs = this.StaffsCollection;
    if (role) {
      Staffs = Staffs.filter(
        (Staff) => Staff.role.toLowerCase() === role.toLowerCase()
      );
    }
    return await search(Staffs, ["name"], searchBy);
  }
  @Query(() => Staff)
  async Staff(@Arg("id", (type) => ID) id: string): Promise<Staff | undefined> {
    // as auth Staff. check from middleware.
    console.log(id, "Staff_id");
    return await this.StaffsCollection.find((Staff) => Staff.id === id);
  }

  @Mutation(() => Staff, { description: "Create Staff" })
  async createStaff(@Arg("Staff") Staff: AddStaffInput): Promise<Staff> {
    console.log(Staff, "Staff");
    return await Staff;
  }

  //   @Mutation(() => Staff, { description: 'Add or Edit Address' })
  //   async updateAddress(
  //     @Arg('addressInput') addressInput: string
  //   ): Promise<Staff> {
  //     console.log(addressInput, 'addressinput');
  //     return await this.StaffsCollection[0];
  //   }

  //   @Mutation(() => Staff, { description: 'Add or Edit Contact' })
  //   async updateContact(
  //     @Arg('contactInput') contactInput: string
  //   ): Promise<Staff> {
  //     console.log(contactInput, 'contactinput');
  //     return await this.StaffsCollection[0];
  //   }

  //   @Mutation(() => Staff, { description: 'Delete Address' })
  //   async deleteAddress(@Arg('addressId') addressId: string): Promise<Staff> {
  //     console.log(addressId, 'address_id');
  //     return await this.StaffsCollection[0];
  //   }

  //   @Mutation(() => Staff, { description: 'Delete Contact' })
  //   async deleteContact(@Arg('contactId') contactId: string): Promise<Staff> {
  //     console.log(contactId, 'contact_id');
  //     return await this.StaffsCollection[0];
  //   }

  //   @Mutation(() => Staff, { description: 'Add Payment Card' })
  //   async addPaymentCard(@Arg('cardInput') cardInput: string): Promise<Staff> {
  //     console.log(cardInput, 'cardInput');
  //     return await this.StaffsCollection[0];
  //   }

  //   @Mutation(() => Staff, { description: 'Delete Payment Card' })
  //   async deletePaymentCard(@Arg('cardId') cardId: string): Promise<Staff> {
  //     console.log(cardId, 'card_id');
  //     return await this.StaffsCollection[0];
  //   }
}
