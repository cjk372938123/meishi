//index.js
const app = getApp()
let searchKey = null
Page({
  data: {
    banner: [],
  },
  onLoad() {
    this.getTopBanner(); //请求顶部轮播图
  },
 
  //获取首页顶部轮播图
  getTopBanner() {
    let that = this;
    wx.request({
      url: app.globalData.baseUrl + '/wxPicture/getAll',
      success: function(res) {
        console.log("请求到的轮播图", res)
        if (res && res.data && res.data.data && res.data.data.length > 0) {
          let dataList = res.data.data;
          console.log("请求到的轮播图", dataList)
          that.setData({
            banner: dataList
          })
        } else {
          that.setData({
            list: []
          })
        }
      }
    })
  }


})