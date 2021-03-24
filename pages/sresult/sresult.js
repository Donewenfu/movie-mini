// pages/searchpage/searchpage.js
import {getnet} from '../../service/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pagenum:0,
    //请求的数据
    list:[],
    //电影总数
    totalitem:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let keyword = options.key
    wx.setNavigationBarTitle({
      title: keyword,
    })
    this.data.key = keyword
    //请求搜索接口
    this.getserch(keyword)
  },
  getserch(){
    let params = {
      type:'search',
      s:this.data.key,
      page:this.data.pagenum
    }
    getnet(params,(res)=>{
      this.setData({
        list: this.data.list.concat(Object.values(res.data.data)),
        totalitem:res.data.count
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
    if(this.data.list.length>=this.data.totalitem){
      wx.showToast({
        title: '没有更多数据啦！',
        icon:'none'
      })
      return
    }
    this.data.pagenum = this.data.pagenum+1
    this.getserch()
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})