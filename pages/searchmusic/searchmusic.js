// pages/searchmusic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    inputValue: '',
    voice:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  bindKeyInput:function(e){
    this.setData({
      inputValue: e.detail.value
    })
  },
  voice() {
    var that = this;
    if(this.data.voice==false){
      wx.startRecord({
        success(res) {
          const tempFilePath = res.tempFilePath
          console.log(tempFilePath, res.tempFilePath)
          that.setData({
            src:tempFilePath
          })
        }
      })
      this.setData({
        voice:true,
      })
    }
    else{
      wx.stopRecord()
      this.setData({
        voice: false
      })
    }
  },
  playvoice() {
    wx.playVoice({
      filePath: this.data.src // src可以是录音文件临时路径
    })
    // const recorderManager = wx.getRecorderManager()
    // const innerAudioContext = wx.createInnerAudioContext()
    // innerAudioContext.autoplay = true
    // innerAudioContext.src = this.data.src,
    //   innerAudioContext.onPlay(() => {
    //     console.log('开始播放')
    //   })
    // innerAudioContext.onError((res) => {
    //   console.log(res.errMsg)
    //   console.log(res.errCode)
    // })
  }
})