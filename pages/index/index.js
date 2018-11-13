//index.js
//获取应用实例
import { connect } from '../../libs/redux.js';
import {bindActionCreators} from '../../libs/redux.min.js';
import * as ActionCreators  from '../../actions/index.js';
import { store } from '../../store/store.js';
import { changeText2 } from '../../actions/index.js'
import { changeText } from '../../actions/music.js'
const app = getApp()
let state = app.store.getState()
// const Store = app.Store
// const dispatch = Store.dispatch
var items = [{ bind: 'menu1', name: '操作1' }, { bind: 'menu2', name: '操作2' }, { bind: 'menu3',name:'操作3'}]
// let _music;

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
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
  },
  onLoad: function () {
    // this.setData({
    //   music: _music
    // })
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
    // console.log(this.data.userInfo.nickName)
    this.setData({
      color1: "red",
      color2: "black",
      color3: "black",
    })
    wx.switchTab({
      url: '../music/music',
    })
    // wx.navigateTo({
    //   url: '../music/music?name='+this.data.userInfo.nickName+'',
    // })
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
  },
  showDialog() {
    this.dialog.showDialog();
    console.log('点击按钮3')
    nextPageConfig.todoActions.changeText('刘')
    this.setData({
      color1: "black",
      color2: "black",
      color3: "red",
    })
  },

  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  }
// })
}
let mapStateToData = (state, params) => {
  const {
    music
  } = state;
  // _music=music
return music
}
let mapDispatchToPage = dispatch => ({
  //  changetext: name => dispatch(changeText(name))
  todoActions: bindActionCreators(ActionCreators, dispatch)
});
const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)
Page(nextPageConfig);