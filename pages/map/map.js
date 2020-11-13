// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers:[ 
]
  },
 getmsg:function(){

    wx.navigateTo({
    
    url: '../room/room',  
    
    })
   
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
      wx.getLocation({
        success:function(res){
          that.setData({
            markers:[
              {
                id: 0,
                latitude: 26.05668,
                longitude: 119.19249,
                iconPath : "../../image/location.png",
                // alpha:0,
                callout:{
                  content: " 京元",
                  padding:10,
                  display:'ALWAYS',
                  // borderRadius: 10,
                  // borderColor:'#ff0000',
                  // borderWidth: 2,
                }},
                {
                  id: 1,
                  latitude: 26.05276,
                  longitude: 119.19266,
                  iconPath : "../../image/location.png",
                  callout: {
                    content: " 玫瑰园",
                    padding: 10,
                    display: 'ALWAYS',
                    textAlign: 'center'
                  }
                  
                },
            ]
          })
        },
      })
  },

})