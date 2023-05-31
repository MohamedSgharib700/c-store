import { faker } from "@faker-js/faker";

import { Model } from "sequelize";
import { User } from "../features/users/models/user.model";
import { Factory } from "./factory";

class UserFactory extends Factory<User> {
  protected model: typeof Model = User;
  declare raw: any;

  // TODO:: add role_id after handle this in User Repository
  public definition(): object {
    return {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: "123456",
      passwordConfirm: "123456",
    };
  }
}

export default UserFactory;
