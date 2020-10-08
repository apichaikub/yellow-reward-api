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
  const { Reward, User } = models

  const reward = await Reward.findOne({
    where: {
      id: params.id,
    },
  })

  if (!reward) {
    throw new ResponseError({
      code: 400,
      message: 'Reward id is invalid.',
    })
  }

  const user = await User.findOne({
    where: {
      userId: userId,
    },
  })

  if (user.points < reward.points) {
    throw new ResponseError({
      code: 400,
      message: 'Your point is not enough to get this reward.',
    })
  }

  await userService.pointsUpdate(models, {
    isIncrement: false,
    points: reward.points,
    userId: userId,
  })

  // TODO: add new row to `point_exchange_rewards` tables

  return true
}
