/*
 * @param {Object} user
 * @param {Object} input client request data, or `body` in `express`
 * @param {Object} models
 * @param {String} input.fileUrl
 * @param {String} input.fileExtension
 * @return {Object} Response receipt
 */
export default async (user, input, models) => {
  const { Receipt } = models

  console.log('user', user)

  const receipt = await Receipt.create({
    fileUrl: input.fileUrl,
    fileExtension: input.fileExtension,
    createdBy: user.id,
  })

  return receipt
}
