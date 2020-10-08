/*
 * use to update users points by increment and decrement
 * @param {Object} models
 * @param {Object} options
 */
export default async (models, { isIncrement, points, userId }) => {
  const { User } = models
  const fields = { points }
  const options = { where: { userId } }
  return isIncrement ?
    User.increment(fields, options) :
    User.decrement(fields, options)
}
