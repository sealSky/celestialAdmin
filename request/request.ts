const request = require('request');

let getListConfig = require('./config')
let utils = require('../helper/utils')

let url = utils.setParamsUrl(getListConfig.listConfig.url, getListConfig.listConfig.params);
let zft_url = 'https://www.zhifutui.com/INAVAD?name=3fa1b45c&type=31';
module.exports = {
  async getList() {
    await request.get(zft_url, (error, res, next) => {
      // console.error(error);
      console.log(res.body);
    })
  }
}
