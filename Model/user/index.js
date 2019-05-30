let { poll, poolConnect } = require('../../sql/index');
let { USER } = require('../../sql/sqlMap/index')

const ModelUser = {
  async login() {
    await poolConnect;
    try {
      let request = poll.request();
      return request.query(USER.login, ['17839191581', '123456']);
    } catch (e) {
      console.log(e);
    }
  },
  async add() {
    await poolConnect;
    try {
      let request = poll.request();
      return request.query(USER.add);
    } catch (e) {
      console.log(e);
    }
  },
  async isExist() {
    await poolConnect;
    try {
      let request = poll.request();
      console.log('正确');
      return request.query(USER.isExist);
    } catch (e) {
      console.log('sql出错了');
      console.log(e);
    }
  },
}

module.exports = ModelUser