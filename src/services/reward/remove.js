/*
 * @param {Object} params
 * @param {UUID} params.id
 * @param {Object} models
 * @return {Object} Response reward
 */
export default async (params, models) => {
  const { Reward } = models

  const reward = await Reward.update({
    deletedAt: new Date(),
  }, {
    where: {
      id: params.id,
    },
  })

  return reward
}
