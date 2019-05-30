let express = require('express');
let api = express.Router();
let jwt = require('jsonwebtoken');
let backData = require('../data/data');
let list = JSON.parse(backData.data).list;
/* GET API 列表 */
// 1、获取access_token
api.get('/token', (req, res, next) => {
    let params = req.query;
    let content = { mediaId: params.mediaid };
    let appSecret = params.appsecret;
    let token = jwt.sign(content, appSecret, {
        // 1小时过期
        expiresIn: 60 * 60
    });
    let time = 30 * 60;
    let back = {
        code: 1,
        access_token: token,
        expires_in: time
    };
    res.send(JSON.stringify(back));
});
// 2、获取广告列表
api.get('/getListAd', (req, res) => {
    let params = req.query;
    let placement_id = params.placement_id;
    let back = {
        code: 0,
        list: [],
        placement_id: '',
        msg: ''
    };
    if (placement_id == '') {
        back.code = -1;
        back.msg = 'ad_id为空';
    }
    else {
        back = {
            code: 1,
            list: list,
            placement_id: placement_id,
            msg: 'get ad list success'
        };
    }
    res.send(JSON.stringify(back));
});
// 3、show
api.get('/show', (req, res) => {
    let params = req.query;
    let back_data = {
        code: 1,
        params: params,
        msg: 'show is success'
    };
    res.send(back_data);
});
// 4、click
api.get('/click', (req, res) => {
    let params = req.query;
    let back_data = {
        code: 1,
        params: params,
        msg: 'click is success'
    };
    res.send(back_data);
});
module.exports = api;
//# sourceMappingURL=api.js.map