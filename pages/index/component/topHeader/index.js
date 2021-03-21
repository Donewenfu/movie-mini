//腾讯地图解析
var QQMapWX = require('../../../../utils/qqmap-wx-jssdk');
var qqmapsdk;
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
    city:'定位错误'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //去搜索页面
    goserach(){
       wx.switchTab({
         url: '/pages/search/search',
       })
    },
    //获取城市名字
    getCityname(){
      let that = this;
      wx.getLocation({
        altitude: 'altitude',
        success(res){
          qqmapsdk.reverseGeocoder({
            location:{
              latitude:res.latitude,
              longitude:res.longitude
            },
            success(res){
              that.setData({
                city:res.result.address_component.city
              })
            }
            
          })
        }
      })
    }
  },
  lifetimes:{
    created(){
      
    },
    attached(){
      // 实例化API核心类
      qqmapsdk = new QQMapWX({
        key:'BKVBZ-ADD6D-NCR4G-HQCDR-DYVP3-U3FCB'
      });
       //获取用户的位置信息
       this.getCityname()
    },
    detached(){
      
    }
  }
})
