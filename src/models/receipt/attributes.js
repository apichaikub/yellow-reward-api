import { DataTypes } from 'sequelize'

export default {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  fileUrl: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  fileExtension: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.UUID,
  },
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  pointsBy: {
    type: DataTypes.UUID,
  },
  pointsAt: {
    type: DataTypes.DATE,
  },
}
