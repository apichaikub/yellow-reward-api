import bcrypt from 'bcrypt'
import attributes from './attributes'
import options from './options'

export default (sequelize) => {
  const User = sequelize.define('user', attributes, options)

  User.beforeCreate(async (user) => {
    const hash = await bcrypt.hash(user.password, bcrypt.genSaltSync())
    user.password = hash
  })

  User.associate = ({ OAuthRefreshToken, Reward, Receipt }) => {
    User.hasMany(OAuthRefreshToken, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
    })

    User.hasMany(Reward, {
      foreignKey: {
        name: 'createdBy',
        allowNull: false,
      },
    })

    User.hasMany(Receipt, {
      foreignKey: {
        name: 'createdBy',
        allowNull: false,
      },
    })
  }

  User.prototype.validPassword = function(password) {
    return bcrypt.compare(password, this.password)
  }

  return User
}
