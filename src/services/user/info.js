/*
 * @param {Object} user
 * @param {Object} models
 * @return {Object} Response user
 */
export default async (_user, models) => {
  const userId = _user.id
  const { User } = models

  const user = await User.findOne({
    where: {
      userId,
    },
    attributes: [
      'userId',
      'username',
      'role',
      'points',
      'createdAt',
      'updatedAt',
    ],
  })

  return user
}
