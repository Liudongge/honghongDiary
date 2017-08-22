// 输入框相关处理函数

module.exports = {

    // 计算字符串长度（英文占一个字符，中文汉字占2个字符）
    strlen(str) {
        var len = 0;
        for (var i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i);
            if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
                len++;
            } else {
                len += 2;
            }
        }
        return len;
    },
    /** 腾讯地图 **/
    map: {
        baseUrl: 'https://apis.map.qq.com/ws',
        key: '2TCBZ-IM7K5-XHCIZ-QXLRT-CIT4J-DEFSM',
    },

    /** 输入框控件设置 **/
    input: {
        charWidth: 14, // 单个字符的宽度，in rpx
    },

    /** 本地存储 **/
    // TODO 数据通过API全部存储于服务端
    storage: {
        diaryListKey: 'bearDiaryList',
    }
}
