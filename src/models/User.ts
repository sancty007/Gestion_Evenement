/* import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import { Event } from "./event";

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Définition des attributs optionnels pour l'insertion
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  //events: any;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "user",
    timestamps: false,
  }
);

// Définir la relation
User.hasMany(Event, { foreignKey: "userId" });
 */
