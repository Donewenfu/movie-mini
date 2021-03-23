import {getnet} from '../../service/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //列表数据
    commentList:[],
    //初始化页码数字
    pageNum:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //id
    let ids = options.id;
    //影片标题
    let title = options.title
    //设置标题
    wx.setNavigationBarTitle({
      title
    })
    this.data.id = ids
    //请求评论数据
    this.getComment()
  },

  //请求评论数据
  getComment(){
    let params = {
      type:'comment',
      id:this.data.id,
      page:this.data.pageNum
    }
    getnet(params,(res)=>{
      let listData = Object.values(res.data)
      this.setData({
        commentList:this.data.commentList.concat(listData)
      })
      this.data.params = this.data.pageNum++
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
    this.getComment()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})