// components/component-log-card/index.js

Component({
  // commentList:{
  //   id:1,
  //   nick:"",
  //   avatar:"",
  //   content:"",
  //   time:0,
  //   replyId:0,
  //   replyNick:0
  // },
    /**
     * 组件的属性列表
     */
    properties: {
      commentList:{
        type:Array,
        value:[]
      }
    },

    /**
     * 组件的初始数据
     */
    data: {
      showInput:false
    },

    /**
     * 组件的方法列表
     */
    methods: {
      handleComment:function(){
        console.log('111111111');
        this.setData({
          showInput:true
        })
      },
      onSend:function(data){
        console.log('.............data',data);
        this.setData({
          showInput:false
        })
      }
    }
})