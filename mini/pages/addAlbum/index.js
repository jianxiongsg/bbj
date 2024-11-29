// pages/addAlbum/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      albumTags:[
        {checked:true,val:"普通相册",icon:"https://gw.alicdn.com/imgextra/i1/O1CN01EGYHVK1pYQffBER0N_!!6000000005372-2-tps-130-64.png",noSelectIcon:"https://gw.alicdn.com/imgextra/i1/O1CN01MKl3ya1jHaPYYcgq1_!!6000000004523-2-tps-64-64.png",selectIcon:"https://gw.alicdn.com/imgextra/i4/O1CN01XkRc3W1RG40iBzJLe_!!6000000002083-2-tps-64-64.png"},
        {checked:false,val:"亲子互动",icon:"https://gw.alicdn.com/imgextra/i1/O1CN01s3qmsG1aCheCdAOhe_!!6000000003294-2-tps-130-64.png",noSelectIcon:"https://gw.alicdn.com/imgextra/i4/O1CN01FHxCAb24JW0hHqdA3_!!6000000007370-2-tps-82-64.png",selectIcon:"https://gw.alicdn.com/imgextra/i3/O1CN01MVGJmQ1dq2VfGqH0t_!!6000000003786-2-tps-82-64.png"},
        {checked:false,val:"特别时刻",icon:"https://gw.alicdn.com/imgextra/i1/O1CN01fdBCCP1oifukEpBzX_!!6000000005259-2-tps-130-64.png",noSelectIcon:"https://gw.alicdn.com/imgextra/i4/O1CN01i2FJ701UZhqPe7XLs_!!6000000002532-2-tps-64-64.png",selectIcon:"https://gw.alicdn.com/imgextra/i3/O1CN018rdRGP1TfN7v2Pa6w_!!6000000002409-2-tps-64-64.png"},
        {checked:false,val:"节日庆祝",icon:"https://gw.alicdn.com/imgextra/i4/O1CN016zcoPb1EMOTqqJtkO_!!6000000000337-2-tps-130-64.png",noSelectIcon:"https://gw.alicdn.com/imgextra/i1/O1CN01DxxJnU1LqLh6dYHTC_!!6000000001350-2-tps-64-64.png",selectIcon:"https://gw.alicdn.com/imgextra/i1/O1CN01MqgLMw1ozcZLJKNYm_!!6000000005296-2-tps-64-64.png"},
        {checked:false,val:"成长记录",icon:"https://gw.alicdn.com/imgextra/i4/O1CN01i9lc361CrsTYGhnn1_!!6000000000135-2-tps-130-64.png",noSelectIcon:"https://gw.alicdn.com/imgextra/i3/O1CN01e4errV1YiBdmLScDJ_!!6000000003092-2-tps-64-64.png",selectIcon:"https://gw.alicdn.com/imgextra/i3/O1CN01S7wmwl1R8jfoPRBGP_!!6000000002067-2-tps-64-64.png"},
        {checked:false,val:"生活日常",icon:"https://gw.alicdn.com/imgextra/i1/O1CN01usJcur1bp0NxfcHcN_!!6000000003513-2-tps-130-64.png",noSelectIcon:"https://gw.alicdn.com/imgextra/i3/O1CN019DV21I295NrsKwNVy_!!6000000008016-2-tps-64-64.png",selectIcon:"https://gw.alicdn.com/imgextra/i2/O1CN01gXOAry1eJLrIkxPgf_!!6000000003850-2-tps-64-64.png"},
      ]
    },

    onSelectAlbumTag(v){
      const index = v.currentTarget.dataset.index;
      const list = this.data.albumTags;
      for(let i=0;i<list.length;i++){
        if(i !== index){
          list[i].checked = false;
        }else{
          list[i].checked = true;
        }
      }
      // 更新
      this.setData({
        albumTags: list
      });
    },

    onInputConfirm(e) {
      console.log('...........ea',e)
      // const value = e.detail.value
      // this.data.comment.content = value
      // this.setData({
      //   "comment.content":value
      // })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})