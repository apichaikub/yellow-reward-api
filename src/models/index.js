import { postgreYellow } from '../database'
import { createGetId } from '../helper/model'

// import all models here
// can be use with multiple databases
const models = {
  User: postgreYellow.import('../models/user'),
  OAuthRefreshToken: postgreYellow.import('../models/oauthrefreshtoken'),
  Reward: postgreYellow.import('../models/reward'),
  Receipt: postgreYellow.import('../models/receipt'),
}

// set association to the models that was declared
// such as: hasMeny, belongsTo or ect.
Object.keys(models).forEach((key) => {
  const model = models[key]

  if ('associate' in model) {
    model.associate(models)
  }

  model.createGetId = (values, options = {}) => createGetId(model, values, options)
})

export {
  models,
}

