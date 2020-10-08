import { DataTypes } from 'sequelize'

export default {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
  },
  rewardId: {
    type: DataTypes.UUID,
  },
}
