import Sequelize from 'sequelize'
import config from '../config/'

// connect to progres
const postgreYellow = new Sequelize(config.databases.postgres.yellow, {
  dialect: 'postgres',
})

export {
  postgreYellow,
}
