let express = require('express')

let payMedia = express.Router()

let hd = require('../data/zft')

payMedia.get('/GetPayMediaData', (req, res) => {
  let params = req.query;
  let back = {
    code: 1,
    msg: 'get ad success',
    data: JSON.stringify(hd.data),
    params: params
  };
  try {
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

payMedia.get('/AdClick', (req, res) => {
  let params = req.query;
  let back = {
    code: 1,
    msg: 'click is success',
    params: params
  }
  res.send(back)
})


payMedia.get('/AdShow', (req, res) => {
  let params = req.query;
  let back = {
    code: 1,
    msg: 'show is success',
    params: params
  }
  res.send(back)
})

module.exports = payMedia;