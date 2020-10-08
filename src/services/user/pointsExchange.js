import { userService } from '..'
import { ResponseError } from '../../utils/extend'

/*
 * use to exchange users reward
* @param {Object} user
 * @param {Object} params
 * @param {UUID} params.id
 * @param {Object} models
 * @return {Object} Response reward
 */
export default async (_user, params, models) => {
  const userId = _user.id
  const { Reward, User, PointExchangeReward } = models

  const [reward, user] = await Promise.all([
    Reward.findOne({
      where: {
        id: params.id,
      },
    }),
    User.findOne({
      where: {
        userId: userId,
      },
    }),
  ])

  if (!reward) {
    throw new ResponseError({
      code: 400,
      message: 'Reward id is invalid.',
    })
  }

  if (user.points < reward.points) {
    throw new ResponseError({
      code: 400,
      message: 'Your point is not enough to get this reward.',
    })
  }

  const [, exchangeReward] = await Promise.all([
    userService.pointsUpdate(models, {
      isIncrement: false,
      points: reward.points,
      userId: userId,
    }),
    PointExchangeReward.create({
      userId: userId,
      rewardId: reward.id,
    }),
  ])

  return exchangeReward
}
