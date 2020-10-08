/*
 * @param {Object} models
 * @return {Object} Response rewards
 */
export default async (models) => {
  const { Reward } = models

  const rewards = await Reward.findAll({
    order: [
      ['createdAt', 'DESC'],
    ],
  })

  return rewards
}
