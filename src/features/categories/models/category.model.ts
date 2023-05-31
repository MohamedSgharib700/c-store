import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  PrimaryKey,
} from "sequelize-typescript";
import { Video } from "../../videos/models/video.model";
@Table
class Category extends Model {
  @Column({ type: DataType.NUMBER, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(() => Video)
  videos: Video[];
}

export { Category };
