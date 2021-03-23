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
    istextOpen:false,
    //演员人数
    actorNum:null,
    //相关影片数量
    movnum:null,
    //评论数据
    commentLits:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取系统信息
    this.getSystem()
    let mid = options.id
    //通过id查询数据
    this.getDetail(mid);
  },
  //获取详情数据
  getDetail(id){
    let params = {
      type:'info',
      id
    }
    getnet(params,(res)=>{
      let data = res.data
      //获取评论数据
       this.getComment(id)
      wx.setNavigationBarTitle({
        title: data.ChineseName,
      })
      //转换电影的类型
      data.Genre = Object.values(data.Genre).join('/');
      data.Description = data.Description.replace(/\s+/g,"");
      for(var k in data.OtherLike){
        let randomnum = Math.floor(((Math.random()*10)+1).toFixed(1))
        data.OtherLike[k].rate = randomnum
      }
      //视图层数据响应
      this.setData({
        detailData:data,
        actorNum:Object.values(data.Actors).length,
        movnum:Object.values(data.OtherLike).length
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
  //去演员列表
  goactor(e){
    let actorlits = JSON.stringify(e.currentTarget.dataset.listdata) 
    wx.navigateTo({
      url: '../actorlist/actorlist?list='+actorlits
    });
      
  },
  //监听用户滚动事件
  onPageScroll(e){
    //获取用户滚动到的距离
    let userscroll = e.scrollTop

  },
  //请求第一页的数据
  getComment(cid){
    let params = {
      type:'comment',
      id:cid,
      page:0
    }
    getnet(params,(res)=>{
      this.setData({
        commentLits:res.data
      })
    })
  },
  //去评论页面
  gocomment(){
    wx.navigateTo({
      url:'../commentlist/commentlist?id='+this.data.detailData.Id+'&title='+this.data.detailData.ChineseName
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
    wx.pageScrollTo({
      duration: 1200,
      scrollTop:0
    })
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