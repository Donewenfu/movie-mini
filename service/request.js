const HTTP_BASE_URL = "https://wenfu814.xyz/";

/**
 * function: 封装网络请求
 * @url URL地址
 * @params 请求参数
 * @method 请求方式：GET/POST
 * @onSuccess 成功回调
 * @onFailed  失败回调
 */

function request(params, method, onSuccess, onFailed) {
  wx.showLoading({
    title: "正在加载中...",
  })
  var header = {
    'content-type': 'application/x-www-form-urlencoded',
    // 'token': 请求所需的token,
  }
  wx.request({
    url: HTTP_BASE_URL,
    data: dealParams(params),
    method: method,
    header: header,
    success: function (res) {
      wx.hideLoading();
      if(res.data){
        onSuccess(res)
      }
    },
    fail: function (error) {
      onFailed(error); //failure for other reasons
    }
  })
}

/**
 * function: 根据需求处理请求参数：添加固定参数配置等
 * @params 请求参数
 */
function dealParams(params) {
  // console.log("请求参数:", params)
  return params;
}


export function postnet(params, onSuccess, onFailed) {
  request(params, "POST", onSuccess, onFailed);
}
export function getnet(params, onSuccess, onFailed) {
  request(params, "GET", onSuccess, onFailed);
}