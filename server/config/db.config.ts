import * as dotenv from 'dotenv';
const envPath = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
dotenv.config({ path: `.${envPath}.env` });

const DbConfig = {
  HOST: process.env.MYSQL_HOST ?? '',
  USER: process.env.MYSQL_USER ?? '',
  PASSWORD: process.env.MYSQL_PASSWORD ?? '',
  DB: process.env.MYSQL_DATABASE ?? '',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

export default DbConfig;
