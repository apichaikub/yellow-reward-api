/*
 * @param {Object} params
 * @param {UUID} params.id
 * @param {Object} input client request data, or `body` in `express`
 * @param {Object} models
 * @param {String} input.fileUrl
 * @param {String} input.fileExtension
 * @return {Object} Response receipts
 */
export default async (params, input, models) => {
  const { Receipt } = models

  const receipts = await Receipt.update({
    fileUrl: input.fileUrl,
    fileExtension: input.fileExtension,
  }, {
    where: {
      id: params.id,
    },
  })

  return receipts
}
