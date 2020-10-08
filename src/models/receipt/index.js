import attribues from './attributes'
import options from './options'

export default (sequelize) => {
  const Receipt = sequelize.define('receipt', attribues, options)
  return Receipt
}
