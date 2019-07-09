// 关于用户
const USER = {
  login: 'SELECT * FROM UserInfo WHERE find_in_set(?, userName) && find_in_set(?, password);',
  add: `insert into UserInfo(userName, password, avatar) values(?, ?, ?, ?);`,
  isExist: `select * from UserInfo where userName=17839191581;`
};

module.exports = USER;
