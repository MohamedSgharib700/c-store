import sequelize from "../../../configs/DB/sequelize";
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";
// import { RoleUser } from "./role-user.model";
import { table } from "console";
import { User } from "../../users/models/user.model";
import { RoleUser } from "./role-user.model";

@Table
class Role extends Model {
  @Column({ type: DataType.NUMBER })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @BelongsToMany(() => User, () => RoleUser)
  roles: Role[];
}

//   declare addPermissions: HasManyAddAssociationsMixin<
//     Permission,
//     Array<object>
//   >;
//   declare getPermissions: HasManyGetAssociationsMixin<Permission>;
//   declare removePermissions: HasManyRemoveAssociationsMixin<
//     Permission,
//     Permission
//   >;

//   id!: number | string;
//   name!: string;
//   permissions!: Permission[];
// }

// Role.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING(100),
//       allowNull: false,
//       unique: false,
//     },
//   },
//   {
//     sequelize,
//     tableName: "roles",
//   }
// );

export { Role };
