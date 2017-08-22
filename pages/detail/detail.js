// 获取应用实例
let app = getApp();
Page({
    data: {
        // 当前日志详情
        diary: null,
        // 是否显示loading状态
        showLoading: false,
        // loading提示语
        loadingMessage: '读取中。。。',
        // 多媒体内容列表
        mediaList: [],
        // 右上角工具栏
        toolbar: '',
        userInfo: {}
    },
    // 事件处理函数
    onLoad: function(params) {
        this.getDiary(params);
        this.getMediaList();
    },
    // 加载日记
    getDiary(params) {
        console.log("Loading diary data...", params);

        let id = params["id"],
            diary;
        app.getDiaryList(list => {
            if (typeof id === 'undefined') {
                diary = list[0];
            } else {
                diary = list[id];
            }
        });

        this.setData({
            diary: diary,
        });
    },
    // 过滤出预览图片列表
    getMediaList() {
        // if (typeof this.data.diary !== 'undefined' && this.data.diary.list.length) {
        //     this.setData({
        //         mediaList: this.data.diary.list.filter(
        //             content => content.type === 'IMAGE'),
        //     });
        // }
    }
})
