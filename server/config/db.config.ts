const DbConfig = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'root',
  DB: 'webiz-task',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

export default DbConfig;
