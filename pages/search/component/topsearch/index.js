// pages/search/topsearch/index.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    suseach(e){
      //获取搜索的内容文字
      console.log(e)
      let resuvalue = e.detail.value;
      if(!resuvalue.trim()){
        wx.showToast({
          title: '请输入搜索内容',
          icon:'none'
        })
        return
      }
      wx.navigateTo({
        url: '/pages/sresult/sresult?key='+resuvalue,
      })
    }
  }
})
