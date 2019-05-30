let express = require('express');
let user = express.Router();

let jwt = require('jsonwebtoken');

let { ModelUser } = require('../../Model/index')

/* USER 路由接口 */
// 1、默认接口，返回用户信息
user.get('/', (req, res) => {
  res.send('获得用户信息');
})

// 2、登录接口
user.get('/login', (req, res) => {
  let params = req.body;
  ModelUser.add()
    .then(result => {
      console.log(result);
    })
    .catch(e => {
      console.log(e);
    });
  let back = {
    code: 1,
    msg: '请求登录接口成功1'
  };
  res.json(back);
})

module.exports = user;
