/*
 * @param {Object} input client request data, or `body` in `express`
 * @param {Object} models
 * @param {String} input.name
 * @param {Number} input.points
 * @param {String} input.fileUrl
 * @param {String} input.fileExtension
 * @return {Object} Response reward
 */
export default async (input, models) => {
  const { Reward } = models

  const reward = await Reward.create({
    name: input.name,
    points: input.points,
    fileUrl: input.fileUrl,
    fileExtension: input.fileExtension,
  })

  return reward
}
