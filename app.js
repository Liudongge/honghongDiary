//app.js
import data from 'data/diaryList';
App({
    onLaunch: function() {
        //调用API从本地缓存中获取数据
        let logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
    },

    getUserInfo: function(cb) {
        let that = this
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.getUserInfo({
                withCredentials: false,
                success: function(res) {
                    that.globalData.userInfo = res.userInfo
                    typeof cb == "function" && cb(that.globalData.userInfo)
                }
            })
        }
    },

    // 读取当前存储的日记列表
    getDiaryList: function(cb) {
        // 若已存在，则使用已存储的日记列表
        if (this.globalData.diaryList) {
            typeof cb == "function" && cb(this.globalData.diaryList)
        } else {
            // 调用读取最新日记列表接口
            this.refreshDiaryList(cb);
        }
    },

    // 获取最新日记列表
    refreshDiaryList: function(cb) {
        let that = this;
        // 调用接口获取最新日记列表，并更新到全局参数diaryList中
        wx.request({
            url: 'https://www.chenqiaodonghu.com:3000/getDiaryList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.globalData.diaryList = res.data;
                typeof cb == "function" && cb(that.globalData.diaryList);
            }
        });
    },
    addDiary: function(diary, cb) {
        console.log(diary);
        wx.request({
            url: 'https://www.chenqiaodonghu.com:3000/addDiary',
            method: 'POST',
            data: diary,
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                console.log(res);
                typeof cb == "function" && cb(res);
            }
        });
    },

    globalData: {
        userInfo: null,
        diaryList: data.diaryList
    }
})
