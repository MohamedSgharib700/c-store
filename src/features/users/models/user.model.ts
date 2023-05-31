import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsToMany,
  AfterUpdate,
} from "sequelize-typescript";
import bcrypt from "bcryptjs";
import { Role } from "../../roles/models/role.model";
import { RoleUser } from "../../roles/models/role-user.model";

@Table
class User extends Model {
  @Column({ type: DataType.NUMBER })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  email: string;

  @Column({ type: DataType.STRING })
  passwowrd: string;

  @Column({ type: DataType.STRING })
  passwordConfirm: string;

  @Column({ type: DataType.STRING })
  address: string;

  @Column({ type: DataType.STRING })
  phone: string;

  @Column({ type: DataType.STRING })
  photo: string;

  @Column({ type: DataType.DATE })
  passwordChangedAt: Date;

  @Column({ type: DataType.STRING })
  passwordResetToken: string;

  @Column({ type: DataType.DATE })
  passwordResetExpires: Date;

  @BelongsToMany(() => Role, () => RoleUser)
  roles: Role[];

  // @Column({ type: DataType.NUMBER, primaryKey: true })
  // permission: number;

  //   declare addRoles: HasManyAddAssociationsMixin<Role, Array<object>>;
  //   declare getRoles: HasManyGetAssociationsMixin<Role>;
  //   declare removeRoles: HasManyRemoveAssociationsMixin<Role, Role>;

  //   id!: number;
  //   name!: string;
  //   email!: string;
  //   photo!: string;
  //   phone!: string;
  //   address!: string;
  password!: string;
  //   passwordConfirm!: Date;
  //   passwordChangedAt: Date | undefined;
  //   permissions!: Permission[] | string[];
  //   roles!: Role[];

  //   correctPassword(candidatePassword: string, userPassword: string): boolean {
  //     return bcrypt.compareSync(candidatePassword, userPassword);
  //   }

  changedPasswordAfter(JWTTimestamp: number): boolean {
    if (this.passwordChangedAt) {
      const changedTimestamp = this.passwordChangedAt.getTime() / 1000;

      return JWTTimestamp < changedTimestamp;
    }
    return false;
  }

  // User.init(
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

  //     email: {
  //       type: DataTypes.STRING(100),
  //       allowNull: false,
  //       unique: true,
  //     },
  //     password: {
  //       type: DataTypes.STRING,
  //       allowNull: false,
  //       set(value: string) {
  //         const hashedPassword = bcrypt.hashSync(value, 10); // hash the password with 10 salt rounds
  //         this.setDataValue("password", hashedPassword); // set the hashed password as the value for the password field
  //       },
  //     },
  //     passwordConfirm: {
  //       type: DataTypes.STRING(100),
  //       allowNull: true,
  //     },
  //     passwordChangedAt: {
  //       type: DataTypes.DATE,
  //     },
  //     passwordResetToken: {
  //       type: DataTypes.STRING,
  //     },
  //     passwordResetExpires: {
  //       type: DataTypes.DATE,
  //     },
  //   },
  //   {
  //     sequelize,
  //     tableName: "users",
  //   }
  // );
  @AfterUpdate
  static updatePasswordChangedAt(user: User) {
    // this will be called when an instance is created or updated
    if (user.changed("password")) {
      user.passwordChangedAt = new Date(Date.now() - 1000);
      user.save();
    }
  }

  // User.addHook(
  //   "afterUpdate",
  //   "updatePasswordChangedAt",
  //   async (user: User): Promise<void> => {
  //     if (user.changed("password")) {
  //       user.passwordChangedAt = new Date(Date.now() - 1000);
  //       user.save();
  //     }
  //   }
  // );
}
export { User };
