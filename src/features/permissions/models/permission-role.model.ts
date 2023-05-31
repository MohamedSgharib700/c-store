import { table } from "console";
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import { Role } from "../../roles/models/role.model";

import { Permission } from "./permission.model";
@Table
class PermissionRole extends Model {
  @ForeignKey(() => Permission)
  @Column({ type: DataType.NUMBER })
  PermissionId: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.NUMBER })
  RoleId: number;
}

export { PermissionRole };
