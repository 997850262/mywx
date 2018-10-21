// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.name)
    this.setData({
    name: options.name
    })
    wx.request({
      url: 'https://xly-wkop.xiaoniangao.cn/music/list', 
      // url:'https://isure.stream.qqmusic.qq.com/C4000042CqG748M3y8.m4a?guid=9460620423&vkey=C18E75E3745DF7ED5FF0DF9758B3C1F7B89F4CDA0C3D5061B7A86EBFD2C8038185C47A9ABAF51BE9EEF09162149890842AE38CC92AF04E9D&uin=7318&fromtag=66',
      method: 'POST',
      data: {
//         guid:'9460620423',
// vkey:'C18E75E3745DF7ED5FF0DF9758B3C1F7B89F4CDA0C3D5061B7A86EBFD2C8038185C47A9ABAF51BE9EEF09162149890842AE38CC92AF04E9D',
//         uin:'7318',
//         fromtag:'66'
         token : 'test181153814',
         limit : '30',
         offset : '0',
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        // console.log(res)
        console.log(res.data)
      }
    }),
      wx.request({
      url: 'https://xly-wkop.xiaoniangao.cn/album/get_musics_by_tpl_id',
        method: 'POST',
        data: {
          token: 'test181153814',
          tpl_id:'100022',
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          console.log(res.data)
        }
      })
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
    this.setData({
      select: false
    })
  }
})