/*
 * @param {Object} input client request data, or `body` in `express`
 * @param {Object} models
 * @param {String} input.fileUrl
 * @param {String} input.fileExtension
 * @return {Object} Response receipt
 */
export default async (input, models) => {
  const { Receipt } = models

  const receipt = await Receipt.create({
    fileUrl: input.fileUrl,
    fileExtension: input.fileExtension,
    // TODO: add createdBy
  })

  return receipt
}
