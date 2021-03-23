import {getnet} from '../../service/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData:null,
    //返回按钮距离顶部的距离
    backBtn:null,
    //文字展开或者收起
    istextOpen:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取系统信息
    this.getSystem()
    let mid = options.id
    //通过id查询数据
    this.getDetail(mid)
  },
  //获取详情数据
  getDetail(id){
    let params = {
      type:'info',
      id
    }
    getnet(params,(res)=>{
      let data = res.data
      console.log(data)
      wx.setNavigationBarTitle({
        title: data.ChineseName,
      })
      //转换电影的类型
      data.Genre = Object.values(data.Genre).join('/');
      data.Description = data.Description.replace(/\s+/g,"");
      //视图层数据响应
      this.setData({
        detailData:data
      })
    })
  },
  //获取系统信息
  getSystem(){
    //获取胶囊按钮位置
    let menuBtn = wx.getMenuButtonBoundingClientRect();
    console.log(menuBtn)
    this.setData({
      backBtn:menuBtn.top
    })
    wx.getSystemInfo({
      success(res){
        console.log(res)
      }
    })
  },
  //返回
  goback(){
    wx.navigateBack({
      delta: 1,
    })
  },
  //展开或者收起文字
  opentext(){
    this.setData({
      istextOpen:!this.data.istextOpen
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