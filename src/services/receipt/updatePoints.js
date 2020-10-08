/*
 * @param {Object} user
 * @param {Object} params
 * @param {UUID} params.id
 * @param {Object} input client request data, or `body` in `express`
 * @param {Object} models
 * @param {Number} input.points
 * @return {Object} Response receipts
 */
export default async (user, params, input, models) => {
  const { Receipt } = models

  const receipts = await Receipt.update({
    points: input.points,
    pointsBy: user.id,
    pointsAt: new Date(),
  }, {
    where: {
      id: params.id,
    },
  })

  return receipts
}
