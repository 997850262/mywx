const API_DOMAIN = 'https://xly-wkop.xiaoniangao.cn';
const axiosFetch=wx.request({
  url: API_DOMAIN, 
  method :'Post',
  data: {
    token: 'test181153814',
    limit: '30',
    offset: '0',
  },
  header: {
    "content-type": "application/x-www-form-urlencoded"
  },
  success: function (res) {
    console.log(res.data)
  },
  fail: function (err) {
    console.log(err)
  }
})

const callServerApi = apiParams => {
  const { endpoint, params } = apiParams;
  console.log('1', endpoint, params)
  // console.log(API_DOMAIN+`${endpoint}`)
  return new Promise((resolve, reject) => {
    wx.request({
      // url: API_DOMAIN + `${endpoint}`,
      url: 'http://qzone-music.qq.com/fcg-bin/fcg_music_fav_getinfo.fcg',
      method: 'GET',
      data: {
        // token: 'test181153814',
        // limit: '30',
        // offset: '0',

         dirinfo : 1,
         dirid : 1,
         uin : 997850262,
         p : 1212121,
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res.data)
      },
      fail: function (err) {
        console.log(err)
      }
    })
    // axiosFetch({
    //   method: 'POST',
    //   url: endpoint,
    //   data: params
    // })
      .then(res => {
        console.log('3')
        if (res.data.ret === 1) {
          resolve(res);
        } else {
          reject(res.data.errMsg);
        }
      })
      .catch(res => {
        console.log('4')
        reject(JSON.stringify(res));
      });
  });
};

const serverApi = store => next => action => {
  console.log(store);
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
      console.log(999, res);
      // const response = typeof (normailzerFun) !== 'undefined' ? normailzerFun(res.data) : res.data;
      // if (params.gettoken) {
      //   params.gettoken(res.data);
      // }
      console.log('中间件', response);
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
