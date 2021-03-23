// components/statr/index.js
Component({
  externalClasses:['imgwidth','fontstyle'],
  /**
   * 组件的属性列表
   */
  properties: {
    //星的数字
    statrnum:{
      type:String,
      value:'未评分',
      observer(news,old){
        this.setStatrnum()
      }
    },
    //评分数字在前还是后 true 前 false后 默认 前
    numDirect:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //全星
    alls:[],
    //半星
    halfs:[],
    //无星
    bads:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //换算星星
    setStatrnum(){
      let statrNum = this.properties.statrnum;
      //计算全星星的颗数
      let allStatr = parseInt(statrNum/2);
      let allstatrs = []
     //计算半星的颗数
     let halfStatr =  parseInt(statrNum%2);
      let halfStatrs = []
     //计算无星的颗数
     let badStatr = (5-allStatr-halfStatr);
     let badStatrs = [];
     for(let i = 1;i<=allStatr;i++){
       allstatrs.push(i)
     }
     for(let i = 1;i<=halfStatr;i++){
      halfStatrs.push(i)
    }
    for(let i = 1;i<=badStatr;i++){
      badStatrs.push(i)
    }
    this.setData({
      alls:allstatrs,
      halfs:halfStatrs,
      bads:badStatrs
    })
    }
  },
  //组件生命周期
  lifetimes:{
      created(){

      },
      attached(){
        this.setStatrnum()
      },
      detached(){

      }
  }
})
