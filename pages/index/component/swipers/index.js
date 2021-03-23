// pages/index/component/swipers/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[],
      observer:function(newData,oldData){
        this.swiperData()

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperList:[],
    //开始位置
    startPoint: 0,
    //左边开的计时器
    leftTime:null,
    //控制用户的滑动 必须滑动完毕以后才能重新滑动
    swiperLock:false,
    //自动轮播图
    autoSwiperimg:null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    godetail(e){
      let ids = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/detail/detail?id='+ids,
      })
    },

    swiperData(){
      let swiperList = this.properties.list.map((item,index)=>{
        return {
          active:false,
          ...item
        }
      })
      this.setData({
        swiperList
      })
    },
    // 触碰开始
    start(e){
      //计算手指触摸时候距离左边的距离 
      this.data.startPoint = e.changedTouches[0].pageX;
    },
    // 触碰结束
    end(e) {

      this.data.swiperLock = false
      let isLeft = 0;
      //计算手指结束触摸的pageX 的位置 
      let endPoint = e.changedTouches[0].pageX;
      //使用结束的位置距离 减去 开始的位置 如果 是小于0 那就证明用户是往左边滑动 ，如果是大于0 证明用户是右滑动 
      isLeft = (endPoint - this.data.startPoint);
      //左滑动
          if (isLeft < 0&&!this.data.swiperLock) {
            this.data.swiperLock = true
            this.moveLeftorRight(1);
        }
        //右滑动
        if (isLeft > 0&&!this.data.swiperLock) {
          this.data.swiperLock = true
            this.moveLeftorRight(0);
        }

      
  },
  //左右移动函数
  moveLeftorRight (idx) {
    //请求左边的定时器
    // clearTimeout(this.data.leftTime)
    //获取轮播列表数据
    let swp = this.properties.list
    //计算列表数据的长度
    let max = swp.length;
    //this的指向赋值
    let self = this;
    //循环给每项item加上active 
    for (let j = 0; j < max; j++) {
        swp[j].active = true;
    }
    if (idx === 1) {//左滑动 

      if(swp[0]&&swp[1]&&swp[2]){
        swp[0].swrClass = 'imgone'
        swp[1].swrClass = 'imgtwo'
        swp[2].swrClass = 'imgthree'
      }
      this.setData({
        swiperList: swp
      }, () => {

         //删除往左边滑动的元素 然后追加到数据的后面然后刷新视图层
          swp.push(swp.shift());
          //更新视图层
          self.setData({
            swiperList: swp
          })
          this.data.leftTime = setTimeout(()=>{
            for (let j = 0; j < max; j++) {
              swp[j].active = false;
          }
          this.setData({
            swiperList: swp
          })
          //解锁滑动
          this.data.swiperLock = false
          },800)
      })
  } else {//右滑动
    if (swp[1]) {
      swp[max - 1].swrClass = 'imgright1'
      swp[0].swrClass = 'imgright2'
      if (swp[2]) {
          swp[1].swrClass = 'imgright3'
      }
      self.setData({
          swiperList: swp
      }, () => {
          swp.unshift(swp.pop());
          self.setData({
              swiperList: swp
          })
          this.data.leftTime = setTimeout(()=>{
            for (let j = 0; j < max; j++) {
              swp[j].active = false;
          }
          this.setData({
            swiperList: swp
          })
          //解锁滑动
          this.data.swiperLock = false
          },800)
      })
  }
  }
  
}
  },
  lifetimes:{
    attached(){
      
    }
  }
})
