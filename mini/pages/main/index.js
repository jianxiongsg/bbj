const { SHARE_CONFIG } = require("../../common/constants/share");

// pages/main/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
   
    this.init();
  },
  
  init() {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1 // 根据tab的索引值设置
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.Listdata();
    this.init();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(){
    console.log('...........onShareAppMessage')
    return {
      userName: '小程序原始id', 
      title: '测试标题',
      imagePath: 'https://gw.alicdn.com/imgextra/i2/O1CN01fEX1lp1UEdaFYEpj7_!!6000000002486-2-tps-140-64.png',
      webpageUrl: 'www.qq.com',
      withShareTicket: true,
      miniprogramType: 0,
      scene: 0,
      path:'pages/main/index'
    }
  },

  onShare(){
    console.log('..........222')
    // wx.shareMiniProgramMessage(SHARE_CONFIG);
    wx.showShareMenu({withShareTicket: true})
  }
})