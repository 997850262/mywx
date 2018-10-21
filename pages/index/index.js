//index.js
//获取应用实例
import { connect, bindActionCreators } from '../../libs/redux.js';
import * as todoActionCreators from '../../actions/index.js';
import { store } from '../../store/store.js';
import { changeText2 } from '../../actions/index.js'
import { changeText } from '../../actions/music.js'
const app = getApp()
let state = app.store.getState()
// const Store = app.Store
// const dispatch = Store.dispatch
var items = [{ bind: 'menu1', name: '操作1' }, { bind: 'menu2', name: '操作2' }, { bind: 'menu3',name:'操作3'}]

let pageConfig = {
  // Page({
  data: {
    motto: 'Hello World!',
    testreducer:'',
    userInfo: {},
    hasUserInfo: false,
    color1:"black",
    color2: "black",
    color3: "black",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    actionSheetHidden: true,
    actionSheetItems: items
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  testonclick: function() {
    console.log('点击按钮1')
    console.log(this.data.userInfo.nickName)
    this.setData({
      color1: "red",
      color2: "black",
      color3: "black",
    })
    wx.navigateTo({
      url: '../music/music?name='+this.data.userInfo.nickName+'',
    })
  },
  testonclick2: function() {
    console.log('点击按钮2')
    this.setData({
      color1: "black",
      color2: "red",
      color3: "black",
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  testonclick3: function () {
    console.log('点击按钮3')
    console.log(app.store.dispatch(changeText('刘')))
    app.store.dispatch(changeText('刘'))
    // let state = store.getState()
    console.log(state)
    // this.changetext('刘');
    // changetext('刘')
    // dispatch(changeText2('new text'))
    // console.log(Store.getState())
    const testreducer = state.music.music.name
    // const motto = Store.getState().index
    // console.log(motto,testreducer)
    // console.log(music)
    this.setData({
      color1: "black",
      color2: "black",
      color3: "red",
      // motto: motto,
      testreducer: testreducer
    })
  },
  actionSheetChange: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindmenu1:function(){
    console.log('点击操作1')
  },
  bindmenu2: function () {
    console.log('点击操作2')
  },
  bindmenu3: function () {
    console.log('点击操作3')
  }
// })
}
let mapStateToData = (state, params) => {
  const {
    music
  } = state;
  console.log(music)
return music
}
let mapDispatchToPage = dispatch => {
   changetext: name => dispatch(changeText(name))
  //  todoActions: bindActionCreators(todoActionCreators, dispatch)
};
const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)
Page(nextPageConfig );