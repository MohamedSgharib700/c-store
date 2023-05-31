import { Table, Column, Model, ForeignKey } from "sequelize-typescript";
import { User } from "../../users/models/user.model";

import { Role } from "./role.model";
@Table
class RoleUser extends Model {
  @ForeignKey(() => Role)
  @Column
  RoleId: number;

  @ForeignKey(() => User)
  @Column
  UserId: number;
}

export { RoleUser };
