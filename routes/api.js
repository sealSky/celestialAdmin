let express = require('express');
let api = express.Router();
let jwt = require('jsonwebtoken');
/* GET API 列表 */
// 1、获取access_token
api.get('/token', (req, res, next) => {
    let params = req.query;
    console.log(params);
    let content = { mediaId: params.mediaid };
    let appSecret = params.appsecret;
    let token = jwt.sign(content, appSecret, {
        // 1小时过期
        expiresIn: 60 * 60
    });
    let time = 10;
    let back = {
        "code": 1,
        "access_token": token,
        "expires_in": time
    };
    console.log(back);
    res.send(JSON.stringify(back));
});
module.exports = api;
//# sourceMappingURL=api.js.map