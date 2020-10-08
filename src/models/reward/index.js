import attribues from './attributes'
import options from './options'

export default (sequelize) => {
  const Reward = sequelize.define('reward', attribues, options)

  // Reward.associate = ({ PointExchangeRewards }) => {
  //   Reward.hasMany(PointExchangeRewards, {
  //     foreignKey: {
  //       name: 'id',
  //       allowNull: false,
  //     },
  //   })
  // }

  return Reward
}
