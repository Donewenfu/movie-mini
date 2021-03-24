// pages/index/component/movieList/index.js
Component({
  options:{
    addGlobalClass:true
  },
  externalClasses:['cbtomm'],
  /**
   * 组件的属性列表
   */
  properties: {
    //轮播数据
    swiperList:{
      type:Array,
      value:[],
      observer(news,old){
        this.setList(news)
      }
    },
    //模块标题
    movieTitle:{
      type:String,
      value:'即将上映'
    },
    tov:{
      type:String,
      value:'s0'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperListsd:[],
    toview:'s8'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //赋值数据
    setList(){
      this.setData({
        swiperListsd:this.properties.swiperList
      })
    },
    //去更多内容区域
    gomore(){
      let params = {
        ob:1
      }
      this.triggerEvent('toMore',params)
    }
  },
  lifetimes:{
    attached(){
        this.setList()
        this.setData({
          toview:'s7'
        })
    }
  }
})
