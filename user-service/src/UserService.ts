import { Sequelize, Model, DataTypes } from 'sequelize';

export class User extends Model {
  public id!: number;
  public name!: string;
  public points!: number;
}

export class UserService {
  private sequelize: Sequelize;

  constructor(sequelize: Sequelize) {
    this.sequelize = sequelize;
    this.initializeModel();
  }

  private initializeModel() {
    User.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        points: { type: DataTypes.INTEGER, defaultValue: 0 },
      },
      { sequelize: this.sequelize, modelName: 'User' },
    );
  }

  async getUserById(id: number): Promise<User | null> {
    return await User.findByPk(id);
  }

  async updateUserPoints(id: number, points: number): Promise<User | null> {
    const user = await this.getUserById(id);
    if (user) {
      user.points = points;
      await user.save();
    }
    return user;
  }
}
