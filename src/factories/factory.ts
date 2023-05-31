import { Model } from "sequelize";

export abstract class Factory<T extends Model> {
  number = 1;
  protected model: any;

  public abstract definition(): object;

  public run(number = 1) {
    this.number = number;
    return this;
  }

  public raw(attributes: object = {}) {
    const raw: object = this.definition();
    return { ...raw, ...attributes };
  }

  public create(attributes: object = {}) {
    const raws: object[] = [];
    for (let i = 0; i < this.number; i++) {
      const raw: object = this.definition();
      raws.push({ ...raw, ...attributes });
    }

    const created =
      this.number <= 1
        ? this.model.create(raws[0])
        : this.model.bulkCreate(raws);

    return created;
  }

  public async flush() {
    await this.model.destroy({
      truncate: true,
    });
  }
}
