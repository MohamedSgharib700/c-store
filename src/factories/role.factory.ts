import { faker } from "@faker-js/faker";
import { Factory } from "./factory";

import { Model } from "sequelize";
import { Role } from "../features/roles/models/role.model";
;

class RoleFactory extends Factory<Role> {
  protected model: typeof Model = Role;

  public definition(): object {
    return {
      name: faker.name.firstName(),
    };
  }
}

export default RoleFactory;
