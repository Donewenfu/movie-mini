// pages/index/component/discuss/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listData:{
      type:Array,
      value:[],
      observer(news,old){
        
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    godetail(e){
      console.log(e)
      let msid = e.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/detail/detail?id='+msid,
      })
    }
  },
  lifetimes:{
    attached(){
     
    }
  }
})
