import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
} from "sequelize-typescript";
@Table
class Permission extends Model {
  @Column({ type: DataType.NUMBER, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  // @HasMany(() => Video)
  // videos: Video[];
}

export { Permission };
