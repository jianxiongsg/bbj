// pages/main/components/component-input/index.js
const themeMixin = require('../../../../common/behaviors/theme')
Component({
  behaviors:[themeMixin],
    /**
     * 组件的属性列表
     */
    properties: {
      
    },

    /**
     * 组件的初始数据
     */
    data: {
      _keyboardShow: false,
      safeHeight: 0,
      isIOS: false,

      // trendId:null,//动态id
      comment: {
        content: ''
      },//评论对象
      cursor: 0,//输入框光标位置
      inputFocus: true,//textarea焦点
      showEmojiPanel:false,
      keywordHeight: 0,//键盘高度
      placeholder: '我也说一句',//textarea的placeholder
      
      
    },

    /**
     * 组件的方法列表
     */
    methods: {
     
      hideAllPanel() {
        this.setData({
          functionShow: false,
          showEmojiPanel: false
        })
      },
      onFocus() {
        this.data._keyboardShow = true
    
        // this.hideAllPanel()
      },
      onBlur(e) {
        this.data._keyboardShow = false
        this.data.cursor = e.detail.cursor || 0
      },
      onInput(e) {
        console.log('...........ea',e)
        const value = e.detail.value
        // this.data.comment.content = value
        this.setData({
          "comment.content":value
        })
      },
      /** 发送 */
      handleSend() {
        const content = this.data.comment.content;
        if(!content) return;
        this.triggerEvent("commentEvent",content);
      },
      /** 显示表情包 */
      clickChooseEmoji:function(data){
        const emoji = data.detail;
        const cont = this.data.comment.content;//评论内容
        const cursor = this.data.cursor;//光标位置
        if (cont.length > 0) {
          const prevStr = cont.substr(0, cursor);
          const nextStr = cont.substr(cursor);
          this.setData({
            'comment.content': prevStr + emoji.emoji + nextStr,
          })
        } else {
          this.setData({
            'comment.content': cont + emoji.emoji,
          })
        }
        this.setData({
          cursor: cursor + emoji.emoji.length
        })
      },

      handleShowEmojiPanel:function(){
        var window = wx.getWindowInfo();
        //表情包的高度
        var height = window.windowHeight - window.safeArea.top;
        this.setData({
          keywordHeight: height
        })
        if (this.data.showEmojiPanel) {
          this.setData({
            inputFocus: true,
            showEmojiPanel: false,
          })
        } else {
          wx.hideKeyboard();
          this.setData({
            showEmojiPanel: true,
          })
        }
      }
      
    }
})