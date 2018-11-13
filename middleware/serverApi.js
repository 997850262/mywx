const API_DOMAIN = 'https://c.y.qq.com';
const callServerApi = apiParams => {
  console.log('callServerApi')
  const { endpoint, params } = apiParams;
  console.log('1', endpoint, params)
  // console.log(API_DOMAIN+`${endpoint}`)
  return new Promise((resolve, reject) => {
    wx.request({
      // url: API_DOMAIN + `${endpoint}`,
      url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=36&_=1520777874472%20',
      method: 'GET',
      data: {

      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: (res) => {
        console.log(res.data);
        resolve(res);
    },
      fail: function (err) {
        console.log(err);
        reject(JSON.stringify(res));
      }
    })
      // .then(res => {
      //   console.log('3')
      //   if (res.data.ret === 1) {
      //     resolve(res);
      //   } else {
      //     reject(res.data.errMsg);
      //   }
      // })
      // .catch(res => {
      //   console.log('4')
      //   reject(JSON.stringify(res));
      // });
  });
};

const serverApi = store => next => action => {
  if (!action.Server_Api) { return next(action); }
  const { type, endpoint, params } = action.Server_Api;
  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint.');
  }
  if (typeof type !== 'string') {
    throw new Error('Specify a string type.');
  }
  if (typeof params !== 'object') {
    throw new Error('Specify a object params.');
  }
  // const { normailzerFun } = action.Server_Api;
  function actionWith(data) {
    const finalAction = { ...action, ...data };
    delete finalAction.Server_Api;
    return finalAction;
  }
  next(actionWith({
    type: `${type}_REQ`,
    __api: { endpoint, params }
  }));
  callServerApi({ endpoint, params })
    .then(res => {
      // console.log(res.data.songlist)
      const response = typeof (normailzerFun) !== 'undefined' ? normailzerFun(res.data.songlist) : res.data.songlist;
      console.log(response)
      next(actionWith({
        type: `${type}_SUC`,
        __api: { endpoint, params },
        response
      }));
    })
    .catch(errMsg => {
      next(actionWith({
        type: `${type}_FAI`,
        __api: { endpoint, params },
        errMsg
      }));
    });
  return null;
};


export default serverApi;
