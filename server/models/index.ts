import { type Dialect, Sequelize } from 'sequelize';
import DbConfig from '../config/db.config';

export const sequelize = new Sequelize(DbConfig.DB, DbConfig.USER, DbConfig.PASSWORD, {
  host: DbConfig.HOST,
  dialect: DbConfig.dialect as Dialect,

  pool: {
    max: DbConfig.pool.max,
    min: DbConfig.pool.min,
    acquire: DbConfig.pool.acquire,
    idle: DbConfig.pool.idle
  }
});

export default { sequelize, Sequelize };
