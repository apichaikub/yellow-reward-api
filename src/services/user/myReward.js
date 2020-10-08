/*
 * @param {Object} user
 * @param {Object} models
 * @return {Object} Response rewards
 */
export default async (user, models) => {
  const { PointExchangeReward, Reward } = models

  const exchangeRewards = await PointExchangeReward.findAll({
    order: [
      ['createdAt', 'DESC'],
    ],
    include: [Reward],
  })

  return exchangeRewards
}
