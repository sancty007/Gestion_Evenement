import { DataTypes, Model , Optional } from 'sequelize';
import sequelize from '../config/database';



interface EventAttributes {
  id: number;
  title: string;
  description: string;
  startDate: Date; // Utilisation du type Date pour les dates
  endDate: Date;
  status: string;
}

// Définition des attributs optionnels pour l'insertion
interface EventCreationAttributes extends Optional<EventAttributes, 'id'> {}


export class Event extends Model<EventAttributes, EventCreationAttributes> implements EventAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public startDate!: Date;
  public endDate!: Date;
  public status!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
  
      autoIncrement: true

    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE, // DATE pour les dates
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE, // DATE pour les dates
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue :'To Do'
    },
    
  },
  {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: false,
  }
);
