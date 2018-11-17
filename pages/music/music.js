// pages/music/music.js
import { connect } from '../../libs/redux.js';
import { bindActionCreators } from '../../libs/redux.min.js';
import * as ActionCreators from '../../actions/index.js';
var innerAudioContext = wx.createInnerAudioContext()
var load=false
let pageConfig = {

  /**
   * 页面的初始数据
   */
  data: {
    select:true,
    isAcitve: false,
    ispart: 0,
    play: true,
    alltime: 0,
    currentTime: 0,
    value:0,
    ismove:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.name)
    // const innerAudioContext = wx.createInnerAudioContext()
    // const token = 'test181153814';
    // const limit = '30';
    // const offset = '0';

    // const dirinfo=1;
    // const dirid=1;
    // const uin=997850262;
    // const p=1212121;
    if (load!=true){
      console.log(load,'onload')
      load=true;
      nextPageConfig.todoActions.music()
    }
    // this.setData({
    //   name: options.name,
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.dialog = this.selectComponent("#dialog");
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
    // wx.navigateBack({
    //   delta:1
    // })
    wx.navigateTo({
      url:'../index/index'
    })
  },
  onclickone: function(){
    console.log('点击单选',this.data.music);
    this.setData({
      select:true
    })
    nextPageConfig.todoActions.onselect()
  },
  onclickmore: function () {
    console.log('点击多选');
    console.log(this.data)
    this.setData({
      select: false
    })
    nextPageConfig.todoActions.onmoreselect()
  },
  selectmusic: function(e) {
    if(this.data.select==true){
      let id = e.currentTarget.dataset.data;
      nextPageConfig.todoActions.selectone(id)
    }
    else{
      let id = e.currentTarget.dataset.data;
      nextPageConfig.todoActions.selectmore(id)
    }
  },
  onCancel: function(){
    this.setData({
      isAcitve: false,
      ispart: 0
    })
  },
  play: function() {
    if (this.data.music.selectid>0)
    {
      var that = this;
      innerAudioContext.src = this.data.music.entities[this.data.music.selectid].m_url;
      innerAudioContext.onCanplay(() => {
        innerAudioContext.duration //类似初始化-必须触发-不触发此函数延时也获取不到
        setTimeout(() => {
          const time = Math.floor(innerAudioContext.duration / 1);
          const allminute = Math.floor(time / 60);
          const allsecond = Math.floor(time % 60);
          that.setData({
            alltime: time,
            allminute,
            allsecond
          })
        }, 1000)
      })
      innerAudioContext.autoplay = true;
      innerAudioContext.onPlay((res) => {
        innerAudioContext.onTimeUpdate(() => {
          const time = Math.floor(innerAudioContext.currentTime / 1);
          const currentminute = Math.floor(time / 60);
          const currentsecond = Math.floor(time % 60);
          const value = Math.floor((time / this.data.alltime) * 100)
          if (this.data.ismove == false) {
            that.setData({
              currentTime: time,
              value: value,
              currentminute,
              currentsecond
            })
          }
        })
      })
      innerAudioContext.play()
      this.setData({
        isAcitve: true,
        ispart: 1,
        play: true,
      })
    }
  },
  audioPlay: function () {
    if (this.data.music.selectid > 0)
    {
      innerAudioContext.autoplay = true
      innerAudioContext.src = this.data.music.entities[this.data.music.selectid].m_url;
      if (this.data.ismove == false) {
        innerAudioContext.play()
      }
      this.setData({
        play: !this.data.play
      })
    }
  },
  audioPause: function () {
    innerAudioContext.pause()
    this.setData({
      play: !this.data.play
    })
  },
  sliderchangeing: function(e){
    this.setData({
      ismove:true
    })
  },
  sliderchange: function(e){
    const newcurrentTime=(e.detail.value*this.data.alltime)/100
    innerAudioContext.seek(newcurrentTime)
    this.setData({
      ismove: false
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
    nextPageConfig.todoActions.rename(this.dialog.data.content)
  },
  rename:function(){
    if (this.data.music.selectid!=undefined)
    {
      this.dialog.showDialog();
      this.setData({
        ispart: 2,
      })
    }
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