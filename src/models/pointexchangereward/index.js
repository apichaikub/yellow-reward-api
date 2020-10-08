import attribues from './attributes'
import options from './options'

export default (sequelize) => {
  const PointExchangeReward = sequelize.define('point_exchange_rewards', attribues, options)

  PointExchangeReward.associate = ({ Reward }) => {
    PointExchangeReward.belongsTo(Reward, {
      foreignKey: {
        name: 'rewardId',
        allowNull: false,
      },
    })
  }

  return PointExchangeReward
}
