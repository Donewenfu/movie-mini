// components/movieitem/index.js
Component({
  externalClasses:['movieitems','imgwidth','textwidth','statrwidth'],
  /**
   * 组件的属性列表
   */
  properties: {
    movieData:{
      type:Object,
      value:{}
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
    godetial(e){
      let mid = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/detail/detail?id='+mid,
      })
    }
  }
})
