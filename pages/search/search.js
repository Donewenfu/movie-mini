import {getnet} from '../../service/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //标题
    titles:null,
    //列表数据
    listData:null,
    tview:'s0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //获取数据
  getMovieData(){
    let params = {
      type:'tag',
      tags:this.data.titles+',,,,',
      page:0,
      sort:"U"
    }
    getnet(params,(res)=>{
      let list = Object.values(res.data.data)
      console.log(list)
      this.setData({
        listData:list
      })
    })
  },
  goshowmovie(){
   wx.showToast({
     title: '功能暂未开发~',
     icon:'none'
   })
  },
  //切换标题
  changet(e){
    this.setData({
      titles:e.detail,
      tview:'s0'
    })
    this.getMovieData()
    
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