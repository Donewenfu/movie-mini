
import {getnet} from '../../service/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   if(options.type == 'movie'){
      wx.setNavigationBarTitle({
        title: '即将上映',
      })
      this.getData('indexM')
   }else if(options.type == 'tv'){
      wx.setNavigationBarTitle({
        title: '热门电视剧',
      })
      this.getData('indexT')
   }
  },
  //请求数据
  getData(durl){
    let params = {
      type:durl
    }
    getnet(params,(res)=>{
      this.setData({
        listData:res.data.subjects
      })
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

  }
})