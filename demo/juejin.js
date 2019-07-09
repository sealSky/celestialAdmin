function jsonp({ url, params, callback }) {
  return new Promise((resolve, reject) => {
    // 创建script 标签
    let script = document.createElement('script')
    // 将回调函数挂在 window 上
    window[callback] = function (data) {
      resolve(data)
      // 代码执行后，删除插入的 script 标签
      document.body.removeChild(script)
    }
    params = { ...params, callback }
    let arr = []
    for (let key in params) {
      arr.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${arr.join('&')}`
    document.body.appendChild(script)
  })
}