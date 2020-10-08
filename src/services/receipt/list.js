/*
 * @param {Object} models
 * @return {Object} Response receipts
 */
export default async (models) => {
  const { Receipt } = models

  const receipts = await Receipt.findAll({
    order: [
      ['createdAt', 'DESC'],
    ],
  })

  return receipts
}
