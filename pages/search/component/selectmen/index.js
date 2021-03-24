// pages/search/component/selectmen/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    listData:[
      {
        id:1,
        name:'电影'
      },
      {
        id:2,
        name:'电视剧'
      },
      {
        id:3,
        name:'综艺'
      },
      {
        id:4,
        name:'动漫'
      },
      {
        id:5,
        name:'短片'
      },
      {
        id:6,
        name:'纪录片'
      }
    ],
    //选中的id
    selectId:1,
    //单个元素的宽度
    signele:null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectitem(e){
      //获取id
      let sid = e.currentTarget.dataset.id
      //获取点击的栏目名字
      let mtitle = e.currentTarget.dataset.title
      //传值给页面
      this.triggerEvent('changetitle',mtitle)
      //获取点击元素的宽度求出元素一半的宽度
      this.createSelectorQuery().select('#se-'+sid).boundingClientRect((rect)=>{
        this.setData({
          signele:rect.width/2
        })
      }).exec()
      //获取点击元素距离屏幕左边的距离
      let offsetLeft = e.currentTarget.offsetLeft
      //响应视图层
      this.setData({
        scrollLeft: (offsetLeft - this.data.scrollViewWidth/2)+this.data.signele,
        selectId:sid
      })
    }
  },
  lifetimes:{
    attached(){
      //初始化传值
      this.triggerEvent('changetitle','电影')
      //初始化求出滚动的宽度
      this.createSelectorQuery().select('.selectlist').boundingClientRect((rect)=>{
        this.data.scrollViewWidth = Math.round(rect.width)
       }).exec()
    }
  }
})
