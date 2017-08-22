// index.js
// 获取应用实例
var app = getApp();
Page({
    data: {
        // 日记列表
        diaryList: null,
        // 是否显示loading状态
        showLoading: false,
        // loading提示语
        loadingMessage: '读取中。。。',
        // 模态对话框样式 
        modalShowStyle: "",
        // 待新建的日记标题
        diaryTitle: "",
        userInfo: {}
    },
    // 事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        var that = this;
        // 调用应用实例的方法获取全局数据
        app.refreshDiaryList(function(diaryList) {
            // 更新数据
            that.setData({
                diaryList: diaryList
            })
        })
        this.hideModal();
        this.clearTitle();
    },
    showDetail: function(event) {
        console.log(event);
        wx.navigateTo({
            url: '../detail/detail?id=' + event.currentTarget.id
        })
    },
    
    // 隐藏模态框
    hideModal() {
        this.setData({modalShowStyle: ""});
    },

    // 清除日记标题
    clearTitle() {
        this.setData({diaryTitle: ""});
    },

    // 点击新建日记按钮  addDiary
    addDiary: function(event) {
        this.setData({
            modalShowStyle: "opacity:1;pointer-events:auto;"
        });
    },

    // 新建日记
    touchAddNew: function(event) {
        this.hideModal();

        wx.navigateTo({
            url: "../add/newDiary?title=" + this.data.diaryTitle,
        });
    },

    // 取消标题输入
    touchCancel: function(event) {
        this.hideModal();
        this.clearTitle();
    }, 

    // 标题输入事件
    titleInput: function(event) {
        this.setData({
            diaryTitle: event.detail.value,
        })
    }
})
