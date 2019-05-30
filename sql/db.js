"use strict";
// 数据库链接配置
const DATA_BASE = {
  user: 'seal',
    password: 'seal',
    server: 'localhost',
    port: 1433,
    database: 'GreatBattle',
    pool: {
    min: 0,
      max: 10,
      idleTimeoutMillis: 3000
  }
}
module.exports = {
  DATA_BASE
};
