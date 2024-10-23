// pages/grownUpRecord/index.js
import {getAge} from '../../common/helper/date';
import {customed} from "./echarts/theme/customed";
import * as echarts from './echarts/echarts';
let chart = null;
function initChart(canvas, width, height, dpr) {
  echarts.registerTheme('customed', customed)
  chart = echarts.init(canvas, 'customed', {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  let option = {
    xAxis: {
      type: 'time',
      boundaryGap: false // 不留边界
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [ 
          [new Date('2021-01-01').getTime(), 820],
            [new Date('2021-01-02').getTime(), 932],
            [new Date('2021-01-03').getTime(), 901],
            [new Date('2021-01-04').getTime(), 934],
            [new Date('2021-01-05').getTime(), 390],
            [new Date('2021-01-06').getTime(), 1330],
            [new Date('2021-01-07').getTime(), 1320]
      ],
      // 将数据转换为时间格式
      encode: {
        x: 0, // 第一个元素为x值
        y: 1  // 第二个元素为y值
    },
        type: 'line',
        smooth: true
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    echarts,
    ec: {
      onInit: initChart
    },

    
    babyId:null,//宝宝id
    recordList:[{
      recordTime:"2025年6月5日",
      age:35,
      height:135,
      weight:20,
      head:30
    }],//记录集合
    winHeight:200,//记录总高度
    flag:false,//判断是否通过onShow()调用onLoad()刷新页面

  },

  

  /**
   * 长按记录删除
   * @param {*} e 
   */
  longpressDelete:function(e){
    let that = this;
    let index = e.currentTarget.dataset.index;
    let records = that.data.recordList;
    let record = records[index];
    // wx.showModal({
    //   title: '提示',
    //   content: '确定要删除此记录吗？',
    //   success: function(res) {
    //     if (res.confirm) {
    //       postParamsRequest("/record/remove",{recordId:record.recordId})
    //       .then((value) =>{
    //         const {code,msg} = value;
    //         if(code == 200){
    //           records.splice(index,1);
    //           that.setData({
    //             recordList:records
    //           })
    //           wx.showToast({
    //             title: msg,
    //           })
    //         }else{
    //           wx.showToast({
    //             title: msg,
    //             icon:'error'
    //           })
    //         }
    //       })
          
    //     } else if (res.cancel) {
    //       return false;
    //     }
    //   }
    // })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // const query = wx.createSelectorQuery().in(this);
    // var chartDom = query.select('#curve_drap');
    // var myChart = echarts.init(chartDom, null, { renderer: 'svg' });
    // var option;
    // console.log('...............chartDom',chartDom,myChart)
    // option = {
    //   xAxis: {
    //     type: 'category',
    //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    //   },
    //   yAxis: {
    //     type: 'value'
    //   },
    //   series: [
    //     {
    //       data: [820, 932, 901, 934, 1290, 1330, 1320],
    //       type: 'line',
    //       smooth: true
    //     }
    //   ]
    // };

    // myChart.setOption(option);

    // var baby = wx.getStorageSync('baby');
    //获取宝宝信息：id
    // if(baby != null){
    //   this.setData({
    //     babyId:baby.babyId
    //   })
    // }
    // //获取宝宝所有记录
    // postParamsRequest('/record/listrecord',{babyId:this.data.babyId})
    // .then((value) =>{
    //   const {code,data,msg} = value;
    //   //计算记录时宝宝的年龄,以及格式化日期
    //   for(var i=0;i<data.length;i++){
    //     if(data[i].recordTime != null && baby.babyBirth != null){
    //       data[i].age = getAge(baby.babyBirth,data[i].recordTime);
    //     }else{
    //       data[i].age = '';
    //     }
    //   }
    //   if(code == 200){
    //     this.setData({
    //       recordList:data,
    //       winHeight:this.data.winHeight + data.length*500
    //     })
    //   }else{
    //     wx.showToast({
    //       title: msg,
    //       icon:'error'
    //     })
    //   }
    // })
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
    if(this.data.flag){
      this.onLoad();//刷新
    }
    this.setData({
      flag:true
    }) 
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