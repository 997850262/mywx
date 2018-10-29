// pages/music/music.js
import { connect } from '../../libs/redux.js';
import { bindActionCreators } from '../../libs/redux.min.js';
import * as ActionCreators from '../../actions/index.js';

let pageConfig = {

  /**
   * 页面的初始数据
   */
  data: {
    select:true,
    isAcitve: false,
    ispart: 0,
    play: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.name)
    this.audioCtx = wx.createAudioContext('myAudio')
    this.setData({
    name: options.name
    })
    // const token = 'test181153814';
    // const limit = '30';
    // const offset = '0';
    const dirinfo=1;
    const dirid=1;
    const uin=997850262;
    const p=1212121;
    nextPageConfig.todoActions.music(dirinfo, dirid, uin, p)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goback: function(){
    wx.navigateBack({
      delta:1
    })
  },
  onclickone: function(){
    console.log('点击单选');
    this.setData({
      select:true
    })
  },
  onclickmore: function () {
    console.log('点击多选');
    console.log(this.data)
    this.setData({
      select: false
    })
  },
  selectmusic: function(e) {
    if(this.data.select==true){
      let id = e.currentTarget.dataset.data;
      console.log(id)
      nextPageConfig.todoActions.selectone(id)
    }
  },
  onCancel: function(){
    this.setData({
      isAcitve: false,
      ispart: 0
    })
  },
  play: function() {
    this.audioCtx.play()
    this.setData({
      isAcitve:true,
      ispart: 1
    })
  },
  audioPlay: function () {
    this.audioCtx.play()
    this.setData({
      play:!this.data.play
    })
  },
  audioPause: function () {
    this.audioCtx.pause()
    this.setData({
      play: !this.data.play
    })
  }
}

let mapStateToData = (state, params) => {
  const {
    music
  } = state;
  return music
}
let mapDispatchToPage = dispatch => ({
  todoActions: bindActionCreators(ActionCreators, dispatch)
});
const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)
Page(nextPageConfig);