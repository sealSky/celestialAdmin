"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const request = require('request');
let getListConfig = require('./config');
let utils = require('../helper/utils');
let url = utils.setParamsUrl(getListConfig.listConfig.url, getListConfig.listConfig.params);
let zft_url = 'https://www.zhifutui.com/INAVAD?name=3fa1b45c&type=31';
module.exports = {
    getList() {
        return __awaiter(this, void 0, void 0, function* () {
            yield request.get(zft_url, (error, res, next) => {
                // console.error(error);
                console.log(res.body);
            });
        });
    }
};
//# sourceMappingURL=request.js.map