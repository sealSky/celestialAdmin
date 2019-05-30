/* 连接池 */

const sql = require('mssql');

let db = require('./db');
let config = db.DATA_BASE;

// 创建连接池
const poll = new sql.ConnectionPool(config);
// 连接
const poolConnect = poll.connect();

poll.on('error', err => {
  console.log('连接池发送错误');
});

module.exports = {
  poll,
  poolConnect
}


