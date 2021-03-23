
//引入请求
import {getnet} from '../../service/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    //上映电影数据
    beLits:[],
    //热门电视剧数据
    tvList:[],
    //热议论数据
    hotData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取热门电影数据
    this.getHotMovie();
    //获取即将上映
    this.getbeMovie();
    //获取电视剧数据
    this.getTvLits();
    //获取热议论数据
    this.gethotData()
  },

  //获取热门电影数据
  getHotMovie(){
    let params = {
      type:'nowplaying'
    }
    getnet(params,(res)=>{
      this.setData({
        swiperList:Object.values(res.data).slice(0,3)
      })
    },(err)=>{
      console.log(err)
    })
  },
  //获取即将上映电影数据
  getbeMovie(){
    let params = {
      type:'indexM'
    }
    getnet(params,(res)=>{
      this.setData({
        beLits:res.data.subjects.slice(0,6)
      })
    })
  },
  //获取电视剧数据
  getTvLits(){
    let params = {
      type:'indexT'
    }
    getnet(params,(res)=>{
      this.setData({
        tvList:res.data.subjects.slice(0,6)
      })
    })
  },
  //去电影更多页面
  gomovie(){
    wx.navigateTo({
      url: '/pages/more/more?type='+'movie',
    })
  },
  //去电视剧更多页面
  gotvmore(){
    wx.navigateTo({
      url: '/pages/more/more?type='+'tv',
    })
  },
  //获取热议论数据
  gethotData(){
    let params = {
      type:'carousel'
    }
    getnet(params,(res)=>{
      res.data.md.forEach((item,index)=>{
        item.name = item.name.substring(1,item.name.length-1)
      })
      this.setData({
        hotData:res.data.md
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