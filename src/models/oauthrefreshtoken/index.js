import attributes from './attributes'
import options from './options'

export default (sequelize) => {
  const OAuthRefreshToken = sequelize.define('oauth_refresh_token', attributes, options)
  return OAuthRefreshToken
}
