let express = require('express');
let activity = express.Router();

let backData = require('../data/activeData');

let hd = require('../data/zft')

activity.get('/GetActivityData', (req, res) => {
  let params = req.query;
  let back = {
    code: 1,
    msg: 'get ad success',
    data: JSON.stringify(hd.data),
  };
  try {
    /*back = {
      code: 0,
      msg: '操作过期'
    }*/
    res.send(back);
  } catch (e) {
    console.log(2);
    back = {
      code: 0,
      msg: 'no ad',
      data: ''
    };
    res.send(back);
  }
});

activity.get('/AdClick', (req, res) => {
  let back = {
    code: 1,
    msg: 'click is success'
  }
  res.send(back)
})


activity.get('/AdShow', (req, res) => {
  let back = {
    code: 1,
    msg: 'show is success'
  }
  res.send(back)
})

activity.post('/AdClick', (req, res) => {
  let back = {
    code: 1,
    msg: 'click is success'
  }
  res.send(back)
})


activity.post('/AdShow', (req, res) => {
  let back = {
    code: 1,
    msg: 'show is success'
  }
  res.send(back)
})

activity.get('/GetAdForSdk', (req, res) => {
  let params = req.query;
  let { uid, ad_source_id } = params;
  let back = {
    code: 0,
    msg: 'no ad'
  };
  try {
    back = backData.data[ad_source_id];
    if (back.param) {
      back.param.uid = uid;
      back.param.ad_source_id = ad_source_id;
    }
    res.send(back);
  } catch (e) {
    console.log(2);
    back = {
      code: 0,
      msg: 'no ad',
    };
    res.send(back);
  }
});

activity.get('/SdkShow', (req, res) => {
  let params = req.query;
  let back = {
    code: 1,
    type: 'show',
    param: params
  };
  res.send(back)
});

activity.get('/SdkClick', (req, res) => {
  let params = req.query;
  let back = {
    code: 1,
    type: 'click',
    param: params
  };
  res.json(back)
});

module.exports = activity;