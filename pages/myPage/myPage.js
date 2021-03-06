let app = getApp();
Page({
    data: {
        userInfo: {},
        userListInfo: [{
            icon: '../../images/iconfont-dingdan.png',
            text: '我的订单',
            isunread: false,
            unreadNum: 0
        }, {
            icon: '../../images/iconfont-card.png',
            text: '我的代金券',
            isunread: false,
            unreadNum: 0
        }, {
            icon: '../../images/iconfont-icontuan.png',
            text: '我的拼团',
            isunread: false,
            unreadNum: 0
        }, {
            icon: '../../images/iconfont-shouhuodizhi.png',
            text: '收货地址管理'
        }, {
            icon: '../../images/iconfont-kefu.png',
            text: '联系客服'
        }, {
            icon: '../../images/iconfont-help.png',
            text: '常见问题'
        }]
    },

    onLoad: function() {
        let that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    }
})
