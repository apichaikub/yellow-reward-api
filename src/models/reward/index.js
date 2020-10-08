import attribues from './attributes'
import options from './options'

export default (sequelize) => {
  const Reward = sequelize.define('reward', attribues, options)

  Reward.associate = ({ PointExchangeReward }) => {
    Reward.hasMany(PointExchangeReward, {
      foreignKey: {
        name: 'rewardId',
        allowNull: false,
      },
    })
  }

  return Reward
}
