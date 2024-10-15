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
      handleComment(){
        this.setData({
          showInput:true
        })
      },
      onSend(data){
        const commentInfo = {
              id:this.data.commentList.length +1,
              nick:"妈妈",
              avatar:"https://gw.alicdn.com/imgextra/i3/O1CN01v0lMKq1OmAv5ZZrcW_!!6000000001747-2-tps-85-82.png",
              content:data.detail,
              time:Date.now(),
              replyId:0,
              replyNick:"爸爸"
        }
        
        this.setData({
          showInput:false,
          commentList:this.data.commentList.concat([commentInfo])
        })
      },
      hideInput(){
        this.setData({
          showInput:false
        })
      }
    }
})