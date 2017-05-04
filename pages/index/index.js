//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    holyList: [{
      id: 36,
      title: "山涧幽草",
      created_at: 1493209938,
      updated_at: 1493209938,
      user_id: 5,
      user_name: "Daisy",
      user_gravatar: "https://secure.gravatar.com/avatar/5ed316f02bde0ad3148709fcb5575d51.png?r=PG",
      url: "http://cp01-rdqa-dev336.cp01.baidu.com:8877/system/images/img_files/000/000/036/original/IMG_7416.JPG?1493209937",
      thumbnails: "http://cp01-rdqa-dev336.cp01.baidu.com:8877/system/images/img_files/000/000/036/thumbnail/IMG_7416.JPG?1493209937",
      exif: {
      resolution: "2875x2244"
      },
      like_num: 1,
      comment_num: 2
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    });
    wx.request({
      url: 'http://cp01-rdqa-dev336.cp01.baidu.com:8877/api/v1/images',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        that.setData({
          holyList: res.data
        });
      },
      fail: function(res) {
        // fail
        alert('get img list fail');
      },
      complete: function(res) {
        // complete
        console.log('complete');
      }
    })
  }
})
