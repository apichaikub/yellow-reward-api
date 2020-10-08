/*
 * @param {Object} params
 * @param {UUID} params.id
 * @param {Object} models
 * @return {Object} Response receipts
 */
export default async (params, models) => {
  const { Receipt } = models

  const receipts = await Receipt.update({
    deletedAt: new Date(),
  }, {
    where: {
      id: params.id,
    },
  })

  return receipts
}
