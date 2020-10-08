import { ResponseError } from '../../utils/extend'
import { userService } from '../../services'

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

  const receipt = await Receipt.findOne({
    where: {
      id: params.id,
    },
  })

  if (receipt.pointsAt) {
    throw new ResponseError({
      code: 403,
      message: 'This receipt is already has received points.',
    })
  }

  const receipts = await Receipt.update({
    points: input.points,
    pointsBy: user.id,
    pointsAt: new Date(),
  }, {
    where: {
      id: params.id,
    },
  })

  await userService.setPoints(models, {
    isIncrement: true,
    points: input.points,
    userId: receipt.createdBy,
  })

  return receipts
}
